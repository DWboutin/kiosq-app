import { theme } from "@/components/atoms/theme/theme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface AuthButtonProps {
  label: string;
  onPress: () => void;
  icon: () => React.ReactNode;
}

export const AuthButton = ({ label, onPress, icon: Icon }: AuthButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: theme.colors.neutral.light,
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontFamily: theme.fonts.family.Inter.Medium,
    fontWeight: "500",
    color: theme.colors.neutral.black,
    textAlign: "center",
  },
});
