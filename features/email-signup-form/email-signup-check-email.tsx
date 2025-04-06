import { View, StyleSheet, Text, Image } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { theme } from "@/components/atoms/theme/theme";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { FormInputContainer } from "@/components/atoms/form-input-container/form-input-container";
import { FormTextInput } from "@/components/atoms/form-text-input/form-text-input";
import { Button } from "@/components/atoms/button/button";
import { useEmailSignupCheckForm } from "./hooks/use-email-signup-check-form";

export const EmailSignupCheckEmail = () => {
  const [submissionError, setSubmissionError] = useState<string | undefined>(undefined);

  const {
    selectors: { control, errors, isAuthenticating, email },
    actions: { handleFormSubmit },
  } = useEmailSignupCheckForm();

  const onSubmit = async () => {
    setSubmissionError(undefined);
    try {
      await handleFormSubmit();
    } catch (err: any) {
      setSubmissionError(err.message || "Échec de la vérification du code. Veuillez réessayer.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("@/assets/images/auth-email-sent.png")} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Regardez vos courriels!</Text>
        <Text style={styles.subtitle}>
          Un message a été envoyé à <Text style={styles.emailHighlight}>{email}</Text> avec un lien
          de connection.
        </Text>
      </View>

      <View style={styles.otpContainer}>
        <FormInputContainer
          label="Code de vérification"
          error={errors.otp?.message || submissionError}
        >
          <Controller
            name="otp"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Veuillez entrer le code de vérification",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Le code doit contenir uniquement des chiffres",
              },
              minLength: {
                value: 6,
                message: "Le code doit contenir 6 chiffres",
              },
              maxLength: {
                value: 6,
                message: "Le code doit contenir 6 chiffres",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormTextInput
                placeholder="Entrez le code"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                keyboardType="number-pad"
                maxLength={6}
                autoFocus
                hasError={errors.otp?.message || submissionError}
              />
            )}
          />
        </FormInputContainer>

        <Button
          label="Connectez-vous"
          onPress={onSubmit}
          isLoading={isAuthenticating}
          style={styles.verifyButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: 20,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.neutral.white,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: theme.fonts.family.Inter.Semibold,
    color: theme.colors.neutral.black,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: theme.fonts.family.Inter.Regular,
    color: theme.colors.neutral.medium,
    textAlign: "center",
  },
  emailHighlight: {
    color: theme.colors.primary.medium,
    fontFamily: theme.fonts.family.Inter.Medium,
  },
  emailText: {
    fontSize: 16,
    fontFamily: theme.fonts.family.Inter.Medium,
    color: theme.colors.neutral.darker,
    textAlign: "center",
  },
  otpContainer: {
    marginTop: 20,
    width: "100%",
  },
  instructionText: {
    fontSize: 14,
    marginBottom: 12,
    textAlign: "center",
    color: theme.colors.neutral.darker,
  },
  verifyButton: {
    backgroundColor: theme.colors.primary.medium,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: theme.colors.neutral.white,
    fontSize: 16,
    fontFamily: theme.fonts.family.Inter.Semibold,
  },
});
