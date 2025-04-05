import { supabase } from "@/lib/supabase";
import { useForm, Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { makeRedirectUri } from "expo-auth-session";
import { router } from "expo-router";
import { storeUserName } from "@/lib/storage";
import { useSavedName } from "@/lib/hooks/use-saved-name";

export interface FormData {
  name: string;
  email: string;
}

export interface EmailSignupFormSelectors {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  hasExistingName: boolean;
  savedName: string | null;
  isLoading: boolean;
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
  const { savedName, hasExistingName, isLoading } = useSavedName();

  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    defaultValues: {
      name: savedName || "",
      email: "",
    },
    mode: "onBlur",
  });

  const handleFormSubmit = handleSubmit(async (data: FormData) => {
    console.log("Form submitted:", data);

    // Use the saved name if the field is empty and we have a saved name
    const nameToUse = data.name || savedName || "";

    const { error } = await supabase.auth.signInWithOtp({
      email: data.email,
      options: {
        // Remove emailRedirectTo to use numeric OTP instead of magic link
        data: {
          full_name: nameToUse,
        },
      },
    });

    if (error) {
      console.error("Error signing in:", error);
      return;
    }

    // Store user name in AsyncStorage if it's provided
    if (nameToUse) {
      await storeUserName(nameToUse);
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
      hasExistingName,
      savedName,
      isLoading,
    },
    actions: {
      handleFormSubmit,
      validateForm,
    },
  };
}
