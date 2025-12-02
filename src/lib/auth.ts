import supabase from "./supabase";
import type { UserAuthResponse } from "@/models/interfaces";
import type { User } from "@supabase/supabase-js";
// import { createUserQuery } from "./queries/user";

const errTemp = {
  message: "Something went wrong, Please try again",
  success: false,
  user: null,
  session: null,
  status: null,
};

export const signUp = async (
  name: string,
  email: string,
  password: string
): Promise<UserAuthResponse> => {
  try {
    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          user_name: name,
        },
      },
    });
    const { data, error } = res;
    if (error) {
      const { message, status } = error;

      return {
        message: `User sign up failed: ${message}`,
        success: false,
        user: null,
        session: null,
        status: status || null,
      };
    }
    if (data) {
      const { user, session } = data;

      return {
        message: "User signed up successfully",
        success: true,
        user,
        session,
        status: 200,
      };
    }
  } catch (err) {
    console.log(err);
  }
  return errTemp;
};

export const signIn = async (
  email: string,
  password: string
): Promise<UserAuthResponse> => {
  try {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    const { data, error } = res;
    if (error) {
      const { message, status } = error;

      return {
        message: `User log in failed: ${message}`,
        success: false,
        user: null,
        session: null,
        status: status || null,
      };
    }
    if (data) {
      console.log(data);
      const { user, session } = data;
      return {
        message: "User logged in succesfully",
        success: true,
        user,
        session,
        status: 200,
      };
    }
  } catch (err) {
    console.log(err);
  }
  return errTemp;
};

export const signOut = async (): Promise<UserAuthResponse> => {
  try {
    const res = await supabase.auth.signOut();
    const { error } = res;
    if (error) {
      const { message, status } = error;
      return {
        message: `User sign out failed: ${message}`,
        success: false,
        user: null,
        session: null,
        status: status || null,
      };
    }
  } catch (err) {
    console.log(err);
  }
  return errTemp;
};

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error("Error fetching user:", error.message);
      return null;
    }
    return data.user;
  } catch (err) {
    console.error("Error in getCurrentUser:", err);
    return null;
  }
};
