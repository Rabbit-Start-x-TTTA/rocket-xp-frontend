import { NextRequest, NextResponse } from 'next/server';
import { XPHistoryMockData } from '../../../../../lib/mock/xpHistoryMockData';
import { XPTransaction } from '../../../../../types/xp-history';

function getAuthenticatedUser(request: NextRequest) {
  const userId = request.headers.get('x-user-id') || 'p1111111-1111-1111-1111-111111111111';
  const userRole = request.headers.get('x-user-role') || 'user';
  
  const userProfile = XPHistoryMockData.userProfiles.find(p => p.id === userId);
  if (!userProfile) return null;

  return {
    id: userProfile.id,
    role: userRole as unknown,
    display_name: userProfile.display_name,
    public_id: userProfile.public_id,
    permissions: userRole === 'admin' ? ['edit_all', 'cancel_all'] : ['view_own']
  };
}

function findTransactionById(id: string): XPTransaction | undefined {
  const transaction = XPHistoryMockData.xpTransactions.find(tx => tx.id === id);
  if (!transaction) return undefined;
  return transaction as XPTransaction;
}

function enrichTransactionWithUserInfo(transaction: XPTransaction) {
  const userProfile = XPHistoryMockData.userProfiles.find(p => p.id === transaction.user_id);
  
  return {
    ...transaction,
    user: userProfile ? {
      id: userProfile.id,
      display_name: userProfile.display_name,
      public_id: userProfile.public_id,
      avatar_url: userProfile.avatar_url
    } : undefined
  };
}

// GET - View transaction details
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authUser = getAuthenticatedUser(request);
    if (!authUser) {
      return NextResponse.json({
        success: false,
        error: { error: 'Unauthorized' }
      }, { status: 401 });
    }

    const transaction = findTransactionById(params.id);
    if (!transaction) {
      return NextResponse.json({
        success: false,
        error: { error: 'Transaction not found' }
      }, { status: 404 });
    }

    // Permission check
    if (authUser.role !== 'admin' && transaction.user_id !== authUser.id) {
      return NextResponse.json({
        success: false,
        error: { error: 'Forbidden' }
      }, { status: 403 });
    }

    const enrichedTransaction = enrichTransactionWithUserInfo(transaction);
    return NextResponse.json({
      success: true,
      data: enrichedTransaction
    });

  } catch (error) {
    console.error('Get transaction error:', error);
    return NextResponse.json({
      success: false,
      error: { error: 'Internal server error' }
    }, { status: 500 });
  }
}

// PUT - Update transaction (Admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authUser = getAuthenticatedUser(request);
    if (!authUser || authUser.role !== 'admin') {
      return NextResponse.json({
        success: false,
        error: { error: 'Admin access required' }
      }, { status: 403 });
    }

    const transaction = findTransactionById(params.id);
    if (!transaction) {
      return NextResponse.json({
        success: false,
        error: { error: 'Transaction not found' }
      }, { status: 404 });
    }

    const updateData = await request.json();
    
    // Simulate update
    const updatedTransaction = {
      ...transaction,
      amount: updateData.amount ?? transaction.amount,
      description: updateData.description ?? transaction.description,
      expires_at: updateData.expires_at ?? transaction.expires_at,
      updated_at: new Date().toISOString()
    };

    // Log admin action
    console.log('Admin transaction update:', {
      admin_id: authUser.id,
      transaction_id: params.id,
      changes: updateData,
      reason: updateData.reason
    });

    return NextResponse.json({
      success: true,
      data: enrichTransactionWithUserInfo(updatedTransaction)
    });

  } catch (error) {
    console.error('Update transaction error:', error);
    return NextResponse.json({
      success: false,
      error: { error: 'Internal server error' }
    }, { status: 500 });
  }
}

// DELETE - Cancel transaction (Admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const authUser = getAuthenticatedUser(request);
    if (!authUser || authUser.role !== 'admin') {
      return NextResponse.json({
        success: false,
        error: { error: 'Admin access required' }
      }, { status: 403 });
    }

    const transaction = findTransactionById(params.id);
    if (!transaction) {
      return NextResponse.json({
        success: false,
        error: { error: 'Transaction not found' }
      }, { status: 404 });
    }

    const cancelData = await request.json();

    // Log cancellation
    console.log('Admin transaction cancellation:', {
      admin_id: authUser.id,
      transaction_id: params.id,
      reason: cancelData.reason,
      original_amount: transaction.amount
    });

    return NextResponse.json({
      success: true,
      data: { message: 'Transaction cancelled successfully' }
    });

  } catch (error) {
    console.error('Cancel transaction error:', error);
    return NextResponse.json({
      success: false,
      error: { error: 'Internal server error' }
    }, { status: 500 });
  }
}