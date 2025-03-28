import { theme } from "@/components/atoms/theme/theme";
import { View, StyleSheet, Text } from "react-native";

interface FormInputContainerProps {
  label: string;
  children: React.ReactNode;
}

export const FormInputContainer = ({ label, children }: FormInputContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  label: {
    fontFamily: theme.fonts.family.Inter.Medium,
    fontWeight: "500",
    fontSize: 14,
    color: theme.colors.neutral.darker,
  },
});
