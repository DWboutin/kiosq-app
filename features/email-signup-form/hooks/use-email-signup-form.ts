import { supabase } from "@/lib/supabase";
import { useForm, Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { makeRedirectUri } from "expo-auth-session";
import { router } from "expo-router";

export interface FormData {
  name: string;
  email: string;
}

export interface EmailSignupFormSelectors {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

export interface EmailSignupFormActions {
  handleFormSubmit: ReturnType<UseFormHandleSubmit<FormData>>;
  validateForm: () => Promise<void>;
}

export interface EmailSignupFormHook {
  selectors: EmailSignupFormSelectors;
  actions: EmailSignupFormActions;
}

// We don't need redirectTo anymore since we're using OTP codes now
// const redirectTo = makeRedirectUri();

export function useEmailSignupForm(): EmailSignupFormHook {
  // console.log("redirectTo", redirectTo);
  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
    },
    mode: "onBlur",
  });

  const handleFormSubmit = handleSubmit(async (data: FormData) => {
    console.log("Form submitted:", data);
    const { error } = await supabase.auth.signInWithOtp({
      email: data.email,
      options: {
        // Remove emailRedirectTo to use numeric OTP instead of magic link
        data: {
          full_name: data.name,
        },
      },
    });

    if (error) {
      console.error("Error signing in:", error);
      return;
    }

    router.push(`/(tabs)/profile/auth/(email)/email-sent?email=${data.email}`);
  });

  const validateForm = async () => {
    await trigger();
    console.log("Current errors:", errors);
  };

  return {
    selectors: {
      control,
      errors,
    },
    actions: {
      handleFormSubmit,
      validateForm,
    },
  };
}
