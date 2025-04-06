import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { theme } from "@/components/atoms/theme/theme";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useEmailSignupForm } from "@/features/email-signup-form/hooks/use-email-signup-form";
import { useUserAuth } from "@/hooks/use-user-auth";

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
      <Text style={styles.emailText}>{email}</Text>

      <View style={styles.otpContainer}>
        <Text style={styles.instructionText}>Enter the verification code sent to your email</Text>

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

        <TouchableOpacity
          style={styles.verifyButton}
          onPress={handleVerifyOtp}
          disabled={isAuthenticating}
        >
          {isAuthenticating ? (
            <ActivityIndicator size="small" color={theme.colors.neutral.white} />
          ) : (
            <Text style={styles.buttonText}>Verify</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: 20,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
