import { router, Stack } from "expo-router";
import { useEffect } from "react";

export default function ProfileLayout() {
  useEffect(() => {
    router.replace("/profile/auth");
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth/index" options={{ headerShown: false }} />
    </Stack>
  );
}
