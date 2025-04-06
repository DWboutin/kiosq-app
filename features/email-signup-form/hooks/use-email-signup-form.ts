import { useForm, Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { router } from "expo-router";
import { useUserAuth } from "@/hooks/use-user-auth";
import { useEffect } from "react";

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

export function useEmailSignupForm(): EmailSignupFormHook {
  const {
    selectors: { name: savedName, isSigningWithOtp },
    actions: { signInWithOtp, updateName },
  } = useUserAuth();

  const {
    control,
    handleSubmit,
    setValue,
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
    try {
      const nameToUse = data.name || savedName || "";

      await signInWithOtp(data.email, nameToUse);

      if (nameToUse) {
        updateName(nameToUse);
      }

      router.push(`/(tabs)/profile/auth/(email)/email-sent?email=${data.email}`);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  });

  const validateForm = async () => {
    await trigger();
    console.log("Current errors:", errors);
  };

  useEffect(() => {
    setValue("name", savedName || "");
  }, [savedName]);

  return {
    selectors: {
      control,
      errors,
      hasExistingName: savedName !== null,
      savedName,
      isLoading: isSigningWithOtp,
    },
    actions: {
      handleFormSubmit,
      validateForm,
    },
  };
}
