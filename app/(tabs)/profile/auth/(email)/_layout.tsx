import { router } from "expo-router";

import { theme } from "@/components/atoms/theme/theme";
import { Stack } from "expo-router";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ArrowIcon } from "@/components/atoms/icons/arrow-icon/arrow-icon";

export default function ProfileLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            router.push("/profile/auth");
          }}
        >
          <View style={styles.iconContainer}>
            <ArrowIcon />
          </View>
          <Text style={styles.backButtonText}>Options de connections</Text>
        </TouchableOpacity>
      </View>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="email-signup" options={{ headerShown: false }} />
        <Stack.Screen name="email-sent" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
    position: "relative",
    flex: 1,
    backgroundColor: theme.colors.neutral.white,
  },
  backButtonContainer: {
    width: "100%",
    padding: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: theme.colors.neutral.darker,
    fontFamily: theme.fonts.family.Inter.Medium,
    flexShrink: 1,
  },
});
