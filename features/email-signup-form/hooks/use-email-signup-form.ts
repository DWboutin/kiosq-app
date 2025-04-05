import { useForm, Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";

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

export function useEmailSignupForm(): EmailSignupFormHook {
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

  const handleFormSubmit = handleSubmit((data: FormData) => {
    console.log("Form submitted:", data);
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
