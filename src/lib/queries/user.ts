import type { User } from "@supabase/supabase-js";
import supabase from "../supabase";

export const createUserQuery = async (user: User) => {
  const { data, error } = await supabase
    .from("users")
    .insert([
      { id: user.id, email: user.email, userName: user.user_metadata.userName },
    ])
    .select();

  return { data, error };
};
