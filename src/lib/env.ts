/**
 * Environment variables validation and type-safe access
 * Ensures all required environment variables are present at runtime
 */

const requiredEnvVars = [
  "NEXT_PUBLIC_APP_URL",
  // Add other required env vars here
] as const;

const optionalEnvVars = [
  "NEXT_PUBLIC_ANALYTICS_ID",
  // Add optional env vars here
] as const;

/**
 * Validates that all required environment variables are set
 * @throws Error if any required environment variable is missing
 */
export function validateEnv(): void {
  const missing: string[] = [];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missing.join("\n")}\n\nPlease check your .env.local file.`
    );
  }
}

/**
 * Type-safe access to environment variables
 */
export const env = {
  // App configuration
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",

  // Optional configurations
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID,
} as const;

/**
 * Check if we're running on the server
 */
export const isServer = typeof window === "undefined";

/**
 * Check if we're running on the client
 */
export const isClient = typeof window !== "undefined";

/**
 * Get the base URL for API calls
 */
export function getBaseUrl(): string {
  if (isClient) {
    return "";
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return env.appUrl;
}
