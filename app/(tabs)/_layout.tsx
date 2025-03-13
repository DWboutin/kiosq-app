import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MapPin } from "@/components/atoms/icons/map-pin/map-pin";
import { ShoppingBag } from "@/components/atoms/icons/shopping-bag/shopping-bag";
import { MessageBubble } from "@/components/atoms/icons/message-bubble/message-bubble";
import { UserCircle } from "@/components/atoms/icons/user-circle/user-circle";
import { theme } from "@/components/atoms/theme/theme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary.dark,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarIconStyle: {
          marginTop: 12,
          marginBottom: 4,
        },
        tabBarLabelStyle: {
          marginTop: 4,
          fontSize: 12,
          fontFamily: theme.fonts.family.Lato.Regular,
        },
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            height: 100,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -1 },
            shadowOpacity: 0.15,
            shadowRadius: 20,
          },
          default: {
            height: 90,
            backgroundColor: "white",
            elevation: 15, // Android shadow equivalent
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -1 },
            shadowOpacity: 0.15,
            shadowRadius: 20,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorer",
          tabBarIcon: ({ focused }) => <MapPin focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="reservations"
        options={{
          title: "Réservations",
          tabBarIcon: ({ focused }) => <ShoppingBag focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ focused }) => <MessageBubble focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ focused }) => <UserCircle focused={focused} />,
        }}
      />
    </Tabs>
  );
}
