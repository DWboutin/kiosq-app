import { StyleSheet, TouchableOpacity } from "react-native";

interface PressableCardProps {
  onPress: () => void;
  children: React.ReactNode;
}

export const PressableCard = ({ onPress, children }: PressableCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
