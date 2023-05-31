import toast from "react-hot-toast";

export const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = 'Email Required';
      toast.error(error);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
      toast.error(error);
    }

    return error
}

export function emailValidator(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
