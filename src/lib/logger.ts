/**
 * Logging utility with different log levels
 */

type LogLevel = "debug" | "info" | "warn" | "error";

interface LogOptions {
  level?: LogLevel;
  timestamp?: boolean;
  prefix?: string;
}

class Logger {
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === "development";
  }

  private formatMessage(
    level: LogLevel,
    message: string,
    options?: LogOptions
  ): string {
    const parts: string[] = [];

    if (options?.timestamp !== false) {
      parts.push(`[${new Date().toISOString()}]`);
    }

    parts.push(`[${level.toUpperCase()}]`);

    if (options?.prefix) {
      parts.push(`[${options.prefix}]`);
    }

    parts.push(message);

    return parts.join(" ");
  }

  debug(message: string, data?: any, options?: LogOptions): void {
    if (!this.isDevelopment) return;

    const formatted = this.formatMessage("debug", message, options);
    console.debug(formatted, data || "");
  }

  info(message: string, data?: any, options?: LogOptions): void {
    const formatted = this.formatMessage("info", message, options);
    console.info(formatted, data || "");
  }

  warn(message: string, data?: any, options?: LogOptions): void {
    const formatted = this.formatMessage("warn", message, options);
    console.warn(formatted, data || "");
  }

  error(message: string, error?: any, options?: LogOptions): void {
    const formatted = this.formatMessage("error", message, options);
    console.error(formatted, error || "");

    if (error instanceof Error) {
      console.error("Stack trace:", error.stack);
    }
  }

  group(label: string, callback: () => void): void {
    console.group(label);
    callback();
    console.groupEnd();
  }

  table(data: any): void {
    if (this.isDevelopment) {
      console.table(data);
    }
  }

  time(label: string): void {
    if (this.isDevelopment) {
      console.time(label);
    }
  }

  timeEnd(label: string): void {
    if (this.isDevelopment) {
      console.timeEnd(label);
    }
  }
}

export const logger = new Logger();
export default logger;
