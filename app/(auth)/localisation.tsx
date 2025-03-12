import { theme } from "@/components/atoms/theme/theme";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/localisation-image.png")}
          style={styles.headerImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.colors.white,
  },
  imageContainer: {
    height: "70%",
    width: "100%",
    overflow: "hidden",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  textContainer: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "red",
    flex: 1,
  },
});
