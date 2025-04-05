import { theme } from "@/components/atoms/theme/theme";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function EmailAuthConfirm() {
  const params = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("URL Parameters:", params);

    // Handle magic link verification
    const verifyMagicLink = async () => {
      const { token_hash, type } = params;

      console.log("Token hash:", token_hash);
      console.log("Type:", type);

      if (!token_hash) {
        setError("Invalid magic link parameters");
        setLoading(false);
        return;
      }

      try {
        // Verify the magic link
        const { error: verifyError } = await supabase.auth.verifyOtp({
          token_hash: token_hash as string,
          type: "email",
        });

        if (verifyError) {
          throw verifyError;
        }

        // If verification is successful, redirect to home tab
        router.replace("/(tabs)/explore");
      } catch (err: any) {
        console.error("Magic link verification error:", err);
        setError(err.message || "Failed to verify magic link. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    verifyMagicLink();
  }, [params]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.primary.medium} />
      ) : error ? (
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Authentication Failed</Text>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Authentication Successful</Text>
          <Text style={styles.subtitle}>Redirecting you...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.neutral.white,
  },
  contentContainer: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: theme.colors.neutral.black,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: theme.colors.neutral.medium,
  },
  errorText: {
    color: theme.colors.secondary.danger,
    textAlign: "center",
    marginTop: 8,
  },
});
