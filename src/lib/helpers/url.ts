/**
 * URL utility functions
 */

export function getQueryParams(url: string): Record<string, string> {
  const params: Record<string, string> = {};
  const searchParams = new URL(url).searchParams;
  
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  
  return params;
}

export function buildQueryString(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      searchParams.append(key, String(value));
    }
  });
  
  return searchParams.toString();
}

export function addQueryParams(
  url: string,
  params: Record<string, any>
): string {
  const urlObj = new URL(url);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      urlObj.searchParams.set(key, String(value));
    }
  });
  
  return urlObj.toString();
}

export function removeQueryParams(url: string, keys: string[]): string {
  const urlObj = new URL(url);
  
  keys.forEach(key => {
    urlObj.searchParams.delete(key);
  });
  
  return urlObj.toString();
}

export function getDomainFromUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return "";
  }
}

export function isAbsoluteUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}
