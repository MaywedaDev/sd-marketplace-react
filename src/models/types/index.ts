import type { User } from "@supabase/supabase-js";

export type AuthContextValue = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};
