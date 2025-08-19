import { useEffect, useState } from "react";
import { AuthContext } from "@/hooks/useAuthContext";
import type { User } from "@supabase/supabase-js";

import { getCurrentUser } from "@/lib/auth";

export type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    // Assuming supabase is already initialized and imported
    getCurrentUser()
      .then((user) => {
        if (user) {
          setUser(user);
          setIsLoggedIn(true);
        } else {
          setUser(null);
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
      });
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}
    >
      {/* Children components will be added here */ children}
    </AuthContext.Provider>
  );
};
