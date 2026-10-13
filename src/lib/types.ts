/**
 * Common TypeScript utility types for the application
 */

// Make specific properties optional
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Make specific properties required
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

// Deep partial type
export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

// Ensure type is not null or undefined
export type NonNullableFields<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

// Extract async function return type
export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;

// Make readonly type mutable
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

// Utility type for API responses
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination types
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ID types for type safety
export type WorkspaceId = string & { readonly __brand: "WorkspaceId" };
export type ProjectId = string & { readonly __brand: "ProjectId" };
export type TaskId = string & { readonly __brand: "TaskId" };
export type UserId = string & { readonly __brand: "UserId" };
