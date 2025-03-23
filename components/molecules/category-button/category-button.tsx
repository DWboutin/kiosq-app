import { theme } from "@/components/atoms/theme/theme";
import { IconComponent } from "@/types/app";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface CategoryButtonProps {
  backgroundColor: string;
  contentColor: string;
  icon: IconComponent;
  text: string;
  onPress?: () => void;
}

export const CategoryButton = ({
  backgroundColor,
  contentColor,
  icon,
  text,
  onPress,
}: CategoryButtonProps) => {
  const Icon = icon;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Icon color={contentColor} />
      </View>
      <Text style={[styles.text, { color: contentColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  iconContainer: {
    marginBottom: 8,
  },
  text: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: theme.fonts.family.Lato.Regular,
  },
});
