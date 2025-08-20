import { useState, useEffect } from "react";
import { getCurrentUser } from "@/lib/auth";
import type { User } from "@supabase/supabase-js";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulate an authentication check
    const checkAuth = async () => {
      try {
        // Replace with actual authentication logic
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

  return { isLoading, isLoggedIn, user };
};

export default useAuth;
