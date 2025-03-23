import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export const TopLinearGradient = () => {
  return <LinearGradient colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0)"]} style={styles.gradient} />;
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 80,
    zIndex: 2,
  },
});
