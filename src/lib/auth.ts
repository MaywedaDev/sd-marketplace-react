import supabase from "./supabase";
import type { UserAuthResponse } from "@/models/interfaces";

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
      return {
        message: "User signed up succesfully",
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
      return {
        message: "User signed up succesfully",
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
