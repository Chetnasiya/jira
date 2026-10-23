/**
 * Common validation utilities
 */

export const validators = {
  email: (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },

  url: (value: string): boolean => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  },

  phoneNumber: (value: string): boolean => {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(value) && value.replace(/\D/g, "").length >= 10;
  },

  minLength: (value: string, min: number): boolean => {
    return value.length >= min;
  },

  maxLength: (value: string, max: number): boolean => {
    return value.length <= max;
  },

  isNumeric: (value: string): boolean => {
    return /^\d+$/.test(value);
  },

  isAlpha: (value: string): boolean => {
    return /^[a-zA-Z]+$/.test(value);
  },

  isAlphanumeric: (value: string): boolean => {
    return /^[a-zA-Z0-9]+$/.test(value);
  },

  passwordStrength: (password: string): {
    score: number;
    feedback: string[];
  } => {
    const feedback: string[] = [];
    let score = 0;

    if (password.length >= 8) {
      score++;
    } else {
      feedback.push("Password should be at least 8 characters");
    }

    if (/[a-z]/.test(password)) score++;
    else feedback.push("Include lowercase letters");

    if (/[A-Z]/.test(password)) score++;
    else feedback.push("Include uppercase letters");

    if (/\d/.test(password)) score++;
    else feedback.push("Include numbers");

    if (/[^a-zA-Z0-9]/.test(password)) score++;
    else feedback.push("Include special characters");

    return { score, feedback };
  },

  isValidDate: (dateString: string): boolean => {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date.getTime());
  },

  isFutureDate: (date: Date): boolean => {
    return date.getTime() > Date.now();
  },

  isPastDate: (date: Date): boolean => {
    return date.getTime() < Date.now();
  },
};

export default validators;
