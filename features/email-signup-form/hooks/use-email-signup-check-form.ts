import { useForm, Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { router, useLocalSearchParams } from "expo-router";
import { useUserAuth } from "@/hooks/use-user-auth";

export interface OtpFormData {
  otp: string;
}

export interface EmailSignupCheckFormSelectors {
  control: Control<OtpFormData>;
  errors: FieldErrors<OtpFormData>;
  isAuthenticating: boolean;
  email: string;
}

export interface EmailSignupCheckFormActions {
  handleFormSubmit: ReturnType<UseFormHandleSubmit<OtpFormData>>;
  validateForm: () => Promise<void>;
}

export interface EmailSignupCheckFormHook {
  selectors: EmailSignupCheckFormSelectors;
  actions: EmailSignupCheckFormActions;
}

export function useEmailSignupCheckForm(): EmailSignupCheckFormHook {
  const { email } = useLocalSearchParams<{ email: string }>();

  const {
    selectors: { isAuthenticating },
    actions: { connectWithOtp },
  } = useUserAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<OtpFormData>({
    defaultValues: {
      otp: "",
    },
    mode: "onBlur",
  });

  const handleFormSubmit = handleSubmit(async (data: OtpFormData) => {
    try {
      await connectWithOtp(email as string, data.otp);

      router.replace("/(tabs)/profile/auth");

      setTimeout(() => {
        router.replace("/(tabs)/explore");
      }, 10);
    } catch (error: any) {
      console.error("OTP verification error:", error);
      throw error;
    }
  });

  const validateForm = async () => {
    await trigger();
    console.log("Current errors:", errors);
  };

  return {
    selectors: {
      control,
      errors,
      isAuthenticating,
      email: email as string,
    },
    actions: {
      handleFormSubmit,
      validateForm,
    },
  };
}
