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
    // Assuming supabase is already initialized and imported
    const checkAuth = async () => {
      console.log("Checking authentication status...");
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
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
