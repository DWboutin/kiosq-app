import { theme } from "@/components/atoms/theme/theme";
import { Text, StyleSheet } from "react-native";

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
    fontFamily: theme.fonts.family.Inter.Semibold,
    fontSize: 16,
    lineHeight: 22.4, // 16 * 1.4 = 22.4 for 140% line height
    color: theme.colors.neutral.black,
  },
});
