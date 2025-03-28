import { theme } from "@/components/atoms/theme/theme";
import { TextInput as RNTextInput, TextInputProps, StyleSheet } from "react-native";

type FormTextInputProps = TextInputProps & {
  hasError?: string;
};

export const FormTextInput = ({ hasError, ...props }: FormTextInputProps) => {
  return <RNTextInput {...props} style={[styles.input, hasError && styles.hasError]} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontFamily: theme.fonts.family.Inter.Regular,
    fontSize: 16,
    borderColor: theme.colors.neutral.light,
    color: theme.colors.neutral.darker,
  },
  hasError: {
    borderColor: theme.colors.secondary.danger,
    color: theme.colors.secondary.danger,
  },
});
