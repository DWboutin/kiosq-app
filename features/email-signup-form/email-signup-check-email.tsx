import { View, StyleSheet, Text, Image, TextInput, ActivityIndicator } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { theme } from "@/components/atoms/theme/theme";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useEmailSignupForm } from "@/features/email-signup-form/hooks/use-email-signup-form";
import { useUserAuth } from "@/hooks/use-user-auth";
import { Button } from "@/components/atoms/button/button";

export const EmailSignupCheckEmail = () => {
  const { email } = useLocalSearchParams<{ email: string }>();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const {
    selectors: { isAuthenticating },
    actions: { connectWithOtp },
  } = useUserAuth();

  const handleVerifyOtp = async () => {
    if (!otp) {
      setError("Please enter the verification code");
      return;
    }

    setError(null);

    try {
      await connectWithOtp(email as string, otp);

      router.replace("/(tabs)/profile/auth");

      setTimeout(() => {
        router.replace("/(tabs)/explore");
      }, 10);
    } catch (err: any) {
      console.error("OTP verification error:", err);
      setError(err.message || "Failed to verify code. Please try again.");
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
        <TextInput
          style={styles.otpInput}
          value={otp}
          onChangeText={setOtp}
          placeholder="Enter code"
          keyboardType="number-pad"
          maxLength={6}
          autoFocus
        />

        {error && <Text style={styles.errorText}>{error}</Text>}

        <Button
          label="Connectez-vous"
          onPress={handleVerifyOtp}
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
  otpInput: {
    height: 48,
    borderWidth: 1,
    borderColor: theme.colors.neutral.light,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: theme.colors.neutral.white,
    marginBottom: 16,
  },
  verifyButton: {
    backgroundColor: theme.colors.primary.medium,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.neutral.white,
    fontSize: 16,
    fontFamily: theme.fonts.family.Inter.Semibold,
  },
  errorText: {
    color: theme.colors.secondary.danger,
    marginBottom: 16,
    fontSize: 14,
  },
});
