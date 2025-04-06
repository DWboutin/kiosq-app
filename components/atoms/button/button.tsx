import { theme } from "@/components/atoms/theme/theme";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from "react-native";

type ButtonProps = {
  label: string | React.ReactNode;
  onPress: () => void;
  variant?: "primary" | "outline";
  size?: "lg" | "md" | "sm";
  fitContent?: boolean;
  style?: ViewStyle;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export const Button = ({
  label,
  onPress,
  variant = "primary",
  size = "lg",
  fitContent = false,
  style,
  isLoading = false,
  isDisabled = false,
}: ButtonProps) => {
  const activeStyles = variant === "primary" ? primaryButtonStyles : outlineButtonStyles;
  const sizeStyle = buttonSizeStyles[size];
  const isButtonDisabled = isLoading || isDisabled;

  const buttonLabelStyle = [
    activeStyles.label,
    sizeStyle.label as TextStyle,
    isButtonDisabled && disabledStyles.label,
  ];

  const buttonStyle = [
    activeStyles.button,
    fitContent && { alignSelf: "flex-start" as const },
    sizeStyle.button as ViewStyle,
    isButtonDisabled && disabledStyles.button,
    style,
  ];

  const loaderColor =
    variant === "primary" ? theme.colors.neutral.white : theme.colors.neutral.black;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} disabled={isButtonDisabled}>
      <View style={styles.contentContainer}>
        {typeof label === "string" ? <Text style={buttonLabelStyle}>{label}</Text> : label}
        {isLoading && <ActivityIndicator size="small" color={loaderColor} />}
      </View>
    </TouchableOpacity>
  );
};

export const buttonSizeStyles = {
  lg: {
    button: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 16,
      paddingRight: 16,
    },
    label: {
      fontSize: 16,
      lineHeight: 24,
    },
  },
  md: {
    button: {
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
    },
    label: {
      fontSize: 14,
      lineHeight: 20,
    },
  },
  sm: {
    button: {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 8,
      paddingRight: 8,
    },
    label: {
      fontSize: 10,
      lineHeight: 16,
    },
  },
};

export const buttonStyles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    borderRadius: theme.borderRadius.medium,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  label: {
    color: theme.colors.neutral.white,
    fontWeight: "bold",
    fontFamily: theme.fonts.family.Lato.Bold,
    textAlign: "center",
  },
});

const primaryButtonStyles = StyleSheet.create({
  button: {
    ...buttonStyles.button,
    backgroundColor: theme.colors.primary.medium,
    borderColor: theme.colors.primary.medium,
  },
  label: {
    ...buttonStyles.label,
    color: theme.colors.neutral.white,
  },
});

const outlineButtonStyles = StyleSheet.create({
  button: {
    ...buttonStyles.button,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: theme.colors.neutral.black,
  },
  label: {
    ...buttonStyles.label,
    color: theme.colors.neutral.black,
  },
});

const disabledStyles = StyleSheet.create({
  button: {
    opacity: 0.7,
  },
  label: {
    color: theme.colors.neutral.white,
  },
});

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 8,
  },
});
