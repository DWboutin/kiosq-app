import { View, StyleSheet, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { theme } from "@/components/atoms/theme/theme";

export const EmailSignupCheckEmail = () => {
  const { email } = useLocalSearchParams<{ email: string }>();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("@/assets/images/auth-email-sent.png")} />
      </View>
      <Text style={styles.emailText}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
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
  },
});
