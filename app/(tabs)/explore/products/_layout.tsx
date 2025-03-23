import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { BackButton } from "@/components/molecules/back-button/back-button";
import { TopLinearGradient } from "@/components/atoms/top-linear-gradient/top-linear-gradient";

export default function ProductsLayout() {
  return (
    <View style={styles.container}>
      <Stack
        initialRouteName="[id]"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          contentStyle: { backgroundColor: "transparent" },
          navigationBarHidden: true,
        }}
      >
        <Stack.Screen name="[id]" />
      </Stack>
      <TopLinearGradient />
      <BackButton />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
