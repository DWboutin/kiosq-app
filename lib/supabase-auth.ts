import { supabase } from "@/lib/supabase";

export const verifyOtpCode = async (email: string, code: string) => {
  try {
    const { data, error } = await supabase.auth.verifyOtp({
      email: email as string,
      token: code,
      type: "email",
    });

    if (error) {
      throw error;
    }

    return data.session;
  } catch (err) {
    console.error("Unexpected error in OTP code verification:", err);
  }
};

export const signInWithOtp = async (email: string, name: string) => {
  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: email as string,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      throw error;
    }
  } catch (err) {
    throw err;
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    return null;
  } catch (err) {
    throw err;
  }
};

export const checkSession = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      throw error;
    }

    return data.session;
  } catch (err) {
    throw err;
  }
};

export const getUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      throw error;
    }

    return data.user;
  } catch (err) {
    throw err;
  }
};
