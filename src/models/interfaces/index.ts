import type { User, Session } from "@supabase/supabase-js";

export interface UserAuthResponse {
  message: string;
  success: boolean;
  user: User | null;
  session: Session | null;
  status: number | null;
}

export interface AuthFormField {
  email: string;
  password: string;
  userName?: string;
}
