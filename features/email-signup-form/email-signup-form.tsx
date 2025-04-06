import { Button } from "@/components/atoms/button/button";
import { FormInputContainer } from "@/components/atoms/form-input-container/form-input-container";
import { FormTextInput } from "@/components/atoms/form-text-input/form-text-input";
import { StyleSheet, View, Text } from "react-native";
import { Controller } from "react-hook-form";
import { useEmailSignupForm } from "./hooks/use-email-signup-form";
import { theme } from "@/components/atoms/theme/theme";

export const EmailSignupForm = () => {
  const {
    selectors: { errors, control, hasExistingName, isLoading },
    actions: { handleFormSubmit },
  } = useEmailSignupForm();

  return (
    <View style={styles.container}>
      {!hasExistingName && (
        <FormInputContainer label={"Nom complet"} error={errors.name?.message}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: {
                value: !hasExistingName,
                message: "Ce nom n'est pas valide.",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormTextInput
                placeholder={hasExistingName ? "Utiliser le nom sauvegardé" : "John Doe"}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                hasError={errors.name?.message}
              />
            )}
          />
        </FormInputContainer>
      )}

      <FormInputContainer label="Courriel" error={errors.email?.message}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Le courriel est requis",
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Cette adresse courriel n'est pas valide.",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormTextInput
              placeholder="john.doe@example.com"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
              hasError={errors.email?.message}
            />
          )}
        />
      </FormInputContainer>

      <View style={styles.buttonContainer}>
        <Button label="Continuer" onPress={handleFormSubmit} isLoading={isLoading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
  },
  savedNameText: {
    fontSize: 14,
    color: theme.colors.neutral.medium,
    marginBottom: 8,
    fontFamily: theme.fonts.family.Nunito.Regular,
  },
});
