import { theme } from "@/components/atoms/theme/theme";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "outline";
};

export const Button = ({ label, onPress, variant = "primary" }: ButtonProps) => {
  const buttonStyles = variant === "primary" ? primaryButtonStyles : outlineButtonStyles;

  return (
    <Pressable onPress={onPress} style={buttonStyles.button}>
      <Text style={buttonStyles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: theme.borderRadius.medium,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  label: {
    flex: 1,
    color: theme.colors.neutral.white,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: theme.fonts.family.Lato.Bold,
    lineHeight: 24,
    textAlign: "center",
  },
});

const primaryButtonStyles = StyleSheet.create({
  button: {
    ...styles.button,
    backgroundColor: theme.colors.primary.medium,
    borderColor: theme.colors.primary.medium,
  },
  label: {
    ...styles.label,
    color: theme.colors.neutral.white,
  },
});

const outlineButtonStyles = StyleSheet.create({
  button: {
    ...styles.button,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: theme.colors.neutral.black,
  },
  label: {
    ...styles.label,
    color: theme.colors.neutral.black,
  },
});
