import { NextRequest, NextResponse } from 'next/server';
import { 
  XPHistoryResponse, 
  XPHistoryFilters, 
  AuthenticatedUser,
  XPTransaction,
  XPSummary,
  PaginationInfo,
  XPTransactionType,
  XPSourceType,
  SortableFields,
  SortOrder
} from '../../../../types/xp-history';
import { XPHistoryMockData } from '../../../../lib/mock/xpHistoryMockData';

// ============================================================================
// HELPER FUNCTIONS WITH PROPER TYPES
// ============================================================================

function getAuthenticatedUser(request: NextRequest): AuthenticatedUser | null {
  const userId = request.headers.get('x-user-id') || 'p1111111-1111-1111-1111-111111111111';
  const userRole = request.headers.get('x-user-role') || 'user';
  
  const userProfile = XPHistoryMockData.userProfiles.find(p => p.id === userId);
  if (!userProfile) return null;

  return {
    id: userProfile.id,
    role: userRole as 'user' | 'admin',
    display_name: userProfile.display_name,
    public_id: userProfile.public_id,
    permissions: userRole === 'admin' ? ['view_all', 'edit_all', 'export'] : ['view_own']
  };
}

function getTransactionType(amount: number, sourceType: XPSourceType): XPTransactionType {
  if (sourceType === 'XP_EXPIRATION') return 'expired';
  if (sourceType === 'MANUAL_ADJUSTMENT' && amount < 0) return 'cancelled';
  if (amount > 0) return 'earned';
  return 'spent';
}

function enrichTransactionWithUserInfo(transaction: XPTransaction): XPTransaction {
  const userProfile = XPHistoryMockData.userProfiles.find(p => p.id === transaction.user_id);
  
  return {
    ...transaction,
    user: userProfile ? {
      id: userProfile.id,
      display_name: userProfile.display_name,
      public_id: userProfile.public_id,
      avatar_url: userProfile.avatar_url,
      organization: userProfile.organization,
      department: userProfile.department
    } : undefined
  };
}

function filterTransactions(transactions: XPTransaction[], filters: XPHistoryFilters): XPTransaction[] {
  return transactions.filter(tx => {
    // User filter
    if (filters.userId && tx.user_id !== filters.userId) {
      return false;
    }

    // Type filter
    if (filters.type) {
      const txType = getTransactionType(tx.amount, tx.source_type);
      if (txType !== filters.type) {
        return false;
      }
    }

    // Source type filter
    if (filters.sourceType && tx.source_type !== filters.sourceType) {
      return false;
    }

    // Date range filters
    if (filters.dateFrom) {
      const txDate = new Date(tx.created_at);
      const fromDate = new Date(filters.dateFrom);
      if (txDate < fromDate) return false;
    }

    if (filters.dateTo) {
      const txDate = new Date(tx.created_at);
      const toDate = new Date(filters.dateTo);
      toDate.setHours(23, 59, 59, 999);
      if (txDate > toDate) return false;
    }

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      if (!tx.description.toLowerCase().includes(searchLower)) {
        return false;
      }
    }

    return true;
  });
}

function calculateXPSummary(transactions: XPTransaction[]): XPSummary {
  const earned = transactions
    .filter(tx => tx.amount > 0)
    .reduce((sum, tx) => sum + tx.amount, 0);

  const spent = transactions
    .filter(tx => tx.amount < 0 && tx.source_type !== 'XP_EXPIRATION')
    .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

  const expired = transactions
    .filter(tx => tx.source_type === 'XP_EXPIRATION')
    .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

  const currentBalance = earned - spent - expired;

  // Calculate expiring soon (within 7 days)
  const now = Date.now();
  const sevenDaysFromNow = now + (7 * 24 * 60 * 60 * 1000);
  
  const expiringSoon = transactions.filter(tx => 
    tx.expires_at && 
    tx.amount > 0 && 
    new Date(tx.expires_at).getTime() <= sevenDaysFromNow &&
    new Date(tx.expires_at).getTime() > now
  );

  const expiringSoonValue = expiringSoon.reduce((sum, tx) => sum + tx.amount, 0);

  return {
    totalEarned: earned,
    totalSpent: spent,
    totalExpired: expired,
    currentBalance,
    availableBalance: Math.max(0, currentBalance),
    totalTransactions: transactions.length,
    expiringSoonValue,
    expiringSoonCount: expiringSoon.length
  };
}

function sortTransactions(
  transactions: XPTransaction[], 
  sortBy: SortableFields = 'created_at', 
  sortOrder: SortOrder = 'desc'
): XPTransaction[] {
  return transactions.sort((a, b) => {
    let aVal: number;
    let bVal: number;
    
    switch (sortBy) {
      case 'amount':
        aVal = Math.abs(a.amount);
        bVal = Math.abs(b.amount);
        break;
      case 'expires_at':
        aVal = a.expires_at ? new Date(a.expires_at).getTime() : 0;
        bVal = b.expires_at ? new Date(b.expires_at).getTime() : 0;
        break;
      case 'created_at':
      default:
        aVal = new Date(a.created_at).getTime();
        bVal = new Date(b.created_at).getTime();
        break;
    }
    
    if (sortOrder === 'asc') {
      return aVal - bVal;
    }
    return bVal - aVal;
  });
}

function parseFiltersFromURL(searchParams: URLSearchParams): XPHistoryFilters {
  const sourceTypeParam = searchParams.get('sourceType');
  const typeParam = searchParams.get('type');
  const sortByParam = searchParams.get('sortBy');
  const sortOrderParam = searchParams.get('sortOrder');

  return {
    userId: searchParams.get('userId') || undefined,
    type: (typeParam && ['earned', 'spent', 'expired', 'cancelled'].includes(typeParam)) 
      ? typeParam as XPTransactionType 
      : undefined,
    sourceType: (sourceTypeParam && [
      'ARTICLE_READ', 'ARTICLE_INTERACTION', 'QUIZ_COMPLETION', 'SURVEY_COMPLETION',
      'EVENT_CHECK_IN', 'EVENT_CHECK_OUT', 'PURCHASE_CASHBACK', 'REWARD_REDEMPTION',
      'XP_EXPIRATION', 'MANUAL_ADJUSTMENT'
    ].includes(sourceTypeParam)) 
      ? sourceTypeParam as XPSourceType 
      : undefined,
    dateFrom: searchParams.get('dateFrom') || undefined,
    dateTo: searchParams.get('dateTo') || undefined,
    search: searchParams.get('search') || undefined,
    page: parseInt(searchParams.get('page') || '1'),
    limit: Math.min(parseInt(searchParams.get('limit') || '20'), 100),
    sortBy: (sortByParam && ['created_at', 'amount', 'expires_at'].includes(sortByParam))
      ? sortByParam as SortableFields
      : 'created_at',
    sortOrder: (sortOrderParam && ['asc', 'desc'].includes(sortOrderParam))
      ? sortOrderParam as SortOrder
      : 'desc'
  };
}

// ============================================================================
// API ROUTE HANDLER
// ============================================================================

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    // Authentication
    const authUser = getAuthenticatedUser(request);
    if (!authUser) {
      return NextResponse.json({ 
        success: false, 
        error: { error: 'Unauthorized' } 
      }, { status: 401 });
    }

    // Parse URL parameters with proper typing
    const { searchParams } = new URL(request.url);
    const filters = parseFiltersFromURL(searchParams);

    // Permission check
    const targetUserId = filters.userId || authUser.id;
    if (authUser.role !== 'admin' && targetUserId !== authUser.id) {
      return NextResponse.json({ 
        success: false, 
        error: { error: 'Forbidden - You can only view your own XP history' } 
      }, { status: 403 });
    }

    // Get user transactions
    const userTransactions = XPHistoryMockData.xpTransactions.filter(tx => 
      tx.user_id === targetUserId
    ) as XPTransaction[];

    // Apply filters
    const filteredTransactions = filterTransactions(userTransactions, filters);

    // Sort transactions
    const sortedTransactions = sortTransactions(
      filteredTransactions, 
      filters.sortBy, 
      filters.sortOrder
    );

    // Pagination
    const total = sortedTransactions.length;
    const totalPages = Math.ceil(total / (filters.limit || 20));
    const skip = ((filters.page || 1) - 1) * (filters.limit || 20);
    const paginatedTransactions = sortedTransactions.slice(skip, skip + (filters.limit || 20));

    // Enrich with user info
    const enrichedTransactions = paginatedTransactions.map(enrichTransactionWithUserInfo);

    // Calculate summary from all user transactions (not filtered)
    const summary = calculateXPSummary(userTransactions);

    // Build pagination info
    const pagination: PaginationInfo = {
      page: filters.page || 1,
      limit: filters.limit || 20,
      total,
      totalPages,
      hasNext: (filters.page || 1) < totalPages,
      hasPrev: (filters.page || 1) > 1
    };

    const response: XPHistoryResponse = {
      transactions: enrichedTransactions,
      summary,
      pagination,
      filters
    };

    return NextResponse.json({ success: true, data: response });

  } catch (error) {
    console.error('XP history API error:', error);
    return NextResponse.json({ 
      success: false, 
      error: { error: 'Internal server error' } 
    }, { status: 500 });
  }
}