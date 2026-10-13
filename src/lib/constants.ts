/**
 * Application-wide constants
 * Central location for all constant values used across the application
 */

// Task status constants
export const TASK_STATUS = {
  BACKLOG: "BACKLOG",
  TODO: "TODO",
  IN_PROGRESS: "IN_PROGRESS",
  IN_REVIEW: "IN_REVIEW",
  DONE: "DONE",
} as const;

export type TaskStatus = (typeof TASK_STATUS)[keyof typeof TASK_STATUS];

// Task priority constants
export const TASK_PRIORITY = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
  URGENT: "URGENT",
} as const;

export type TaskPriority =
  (typeof TASK_PRIORITY)[keyof typeof TASK_PRIORITY];

// Workspace member roles
export const MEMBER_ROLE = {
  ADMIN: "ADMIN",
  MEMBER: "MEMBER",
} as const;

export type MemberRole = (typeof MEMBER_ROLE)[keyof typeof MEMBER_ROLE];

// Query keys for React Query
export const QUERY_KEYS = {
  WORKSPACES: "workspaces",
  WORKSPACE: "workspace",
  PROJECTS: "projects",
  PROJECT: "project",
  TASKS: "tasks",
  TASK: "task",
  MEMBERS: "members",
  ANALYTICS: "analytics",
  USER: "user",
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  THEME: "theme",
  SIDEBAR_STATE: "sidebar-state",
  RECENT_WORKSPACES: "recent-workspaces",
} as const;

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

// Date formats
export const DATE_FORMATS = {
  DISPLAY: "MMM dd, yyyy",
  API: "yyyy-MM-dd",
  FULL: "MMMM dd, yyyy",
  WITH_TIME: "MMM dd, yyyy HH:mm",
} as const;

// Validation constants
export const VALIDATION = {
  WORKSPACE_NAME_MIN: 3,
  WORKSPACE_NAME_MAX: 50,
  PROJECT_NAME_MIN: 3,
  PROJECT_NAME_MAX: 50,
  TASK_TITLE_MIN: 3,
  TASK_TITLE_MAX: 100,
  DESCRIPTION_MAX: 1000,
} as const;

// File upload limits
export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ["image/jpeg", "image/png", "image/gif", "image/webp"],
  ALLOWED_DOCUMENT_TYPES: ["application/pdf", "application/msword"],
} as const;

// API endpoints
export const API_ROUTES = {
  AUTH: {
    SIGN_IN: "/api/auth/sign-in",
    SIGN_UP: "/api/auth/sign-up",
    SIGN_OUT: "/api/auth/sign-out",
  },
  WORKSPACES: "/api/workspaces",
  PROJECTS: "/api/projects",
  TASKS: "/api/tasks",
  MEMBERS: "/api/members",
  ANALYTICS: "/api/analytics",
} as const;

// UI constants
export const UI = {
  SIDEBAR_WIDTH: 280,
  HEADER_HEIGHT: 64,
  MOBILE_BREAKPOINT: 768,
  TOAST_DURATION: 3000,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  GENERIC: "Something went wrong. Please try again.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  NOT_FOUND: "The requested resource was not found.",
  VALIDATION: "Please check your input and try again.",
  NETWORK: "Network error. Please check your connection.",
} as const;
