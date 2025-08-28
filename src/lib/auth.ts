import supabase from "./supabase";
import type { UserAuthResponse } from "@/models/interfaces";
import type { User } from "@supabase/supabase-js";
// import { createUserQuery } from "./queries/user";

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
          userName: name,
        },
      },
    });
    const { data, error } = res;
    if (data) {
      const { user, session } = data;
      // // Optionally, you can create a user record in your database
      // const { error: dbError } = await createUserQuery(user as User);
      // if (dbError) {
      //   console.error("Error creating user in database:", dbError.message);
      //   return {
      //     message: "User created but failed to save in database",
      //     success: false,
      //     user: null,
      //     session: null,
      //     status: 500,
      //   };
      // }

      return {
        message: "User signed up successfully",
        success: true,
        user,
        session,
        status: 200,
      };
    }
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

    return {
      message: "Something went wrong, Please try again",
      success: false,
      user: null,
      session: null,
      status: null,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "Something went wrong, Please try again",
      success: false,
      user: null,
      session: null,
      status: null,
    };
  }
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
    if (data) {
      const { user, session } = data;
      return {
        message: "User logged in succesfully",
        success: true,
        user,
        session,
        status: 200,
      };
    }
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

    return {
      message: "Something went wrong, Please try again",
      success: false,
      user: null,
      session: null,
      status: null,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "Something went wrong, Please try again",
      success: false,
      user: null,
      session: null,
      status: null,
    };
  }
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
    return {
      message: "User signed out succesfully",
      success: true,
      user: null,
      session: null,
      status: 200,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "Something went wrong, Please try again",
      success: false,
      user: null,
      session: null,
      status: null,
    };
  }
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
