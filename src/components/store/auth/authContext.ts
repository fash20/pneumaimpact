import { createContext } from "react";

export type UserData = {
  token: string;
  user:{
    isVerified: boolean;
    email: string;
    role: string
  }
};

type AuthContextType = {
  userData: UserData | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  userData: null,
  signIn: async (email: string, password: string) => {},
  signOut: () => {},
});
