import { createContext, useContext } from "react";
import type { AuthContextValue } from "@/models/types";

export const AuthContext = createContext({} as AuthContextValue);
export const useAuthContext = () => useContext(AuthContext);
