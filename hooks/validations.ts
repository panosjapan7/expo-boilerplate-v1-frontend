// ./hooks/validations.ts
import { useEffect } from "react";

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string) => {
  return password.length >= 6;
};

export const validateRepeatPassword = (
  password: string,
  repeatPassword: string
) => {
  return password === repeatPassword;
};

export const useDebouncedValidation = (
  value: string,
  validationFunction: (value: string) => boolean,
  setErrorMessage: (error: string) => void,
  errorMessage: string,
  debounceDelay: number = 1000
) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (value && !validationFunction(value)) {
        setErrorMessage(errorMessage);
      } else {
        setErrorMessage("");
      }
    }, debounceDelay);

    return () => clearTimeout(timer);
  }, [value, validationFunction, setErrorMessage, errorMessage, debounceDelay]);
};
