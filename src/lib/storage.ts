/**
 * Type-safe local storage wrapper
 */

class Storage {
  private prefix: string;

  constructor(prefix = "jira_") {
    this.prefix = prefix;
  }

  private getKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  get<T>(key: string, defaultValue?: T): T | null {
    if (typeof window === "undefined") return defaultValue || null;

    try {
      const item = window.localStorage.getItem(this.getKey(key));
      return item ? JSON.parse(item) : defaultValue || null;
    } catch (error) {
      console.error(`Error reading from localStorage: ${key}`, error);
      return defaultValue || null;
    }
  }

  set<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(this.getKey(key), JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage: ${key}`, error);
    }
  }

  remove(key: string): void {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.removeItem(this.getKey(key));
    } catch (error) {
      console.error(`Error removing from localStorage: ${key}`, error);
    }
  }

  clear(): void {
    if (typeof window === "undefined") return;

    try {
      const keys = Object.keys(window.localStorage);
      keys.forEach(key => {
        if (key.startsWith(this.prefix)) {
          window.localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error("Error clearing localStorage", error);
    }
  }

  has(key: string): boolean {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(this.getKey(key)) !== null;
  }

  keys(): string[] {
    if (typeof window === "undefined") return [];

    const keys = Object.keys(window.localStorage);
    return keys
      .filter(key => key.startsWith(this.prefix))
      .map(key => key.replace(this.prefix, ""));
  }
}

export const storage = new Storage();
export default storage;
