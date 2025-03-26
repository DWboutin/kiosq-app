import { Stack } from "expo-router";

export default function ExploreLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="products" options={{ headerShown: false }} />
    </Stack>
  );
}
