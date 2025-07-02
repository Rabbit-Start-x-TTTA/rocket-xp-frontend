import { XPHistoryFilters, ExportFilters } from '../../types/xp-history';

export const API_ENDPOINTS = {
  XP_HISTORY: '/api/xp/history',
  XP_EXPORT: '/api/xp/history/export',
  XP_TRANSACTION: '/api/xp/transaction',
  XP_STATS: '/api/xp/stats',
} as const;

export const XP_CONFIG = {
  EXPIRY_DAYS: 365,
  WARNING_DAYS: 7,
  MAX_EXPORT_RECORDS: 10000,
  PAGINATION_LIMIT: 100,
  DEFAULT_PAGE_SIZE: 20
} as const;

// Helper to build query string from filters
export function buildQueryString(filters: XPHistoryFilters | ExportFilters): string {
  const params = new URLSearchParams();
  
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.set(key, String(value));
    }
  });
  
  return params.toString();
}

// Helper to simulate auth headers for testing
export function getTestAuthHeaders(userId?: string, role: string = 'user') {
  return {
    'x-user-id': userId || 'p1111111-1111-1111-1111-111111111111',
    'x-user-role': role
  };
}