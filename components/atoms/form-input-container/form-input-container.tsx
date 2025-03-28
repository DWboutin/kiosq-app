import { theme } from "@/components/atoms/theme/theme";
import { View, StyleSheet, Text } from "react-native";

interface FormInputContainerProps {
  label: string;
  children: React.ReactNode;
  error?: string;
}

export const FormInputContainer = ({ label, children, error }: FormInputContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {children}
      {error && (
        <View>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
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
  errorText: {
    color: theme.colors.secondary.danger,
    fontSize: 12,
    fontFamily: theme.fonts.family.Inter.Regular,
  },
});
