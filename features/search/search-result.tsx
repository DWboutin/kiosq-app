import { theme } from "@/components/atoms/theme/theme";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";

export const SearchResult = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable}>
        <Image source={{ uri: "https://picsum.photos/72/48" }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Title Text</Text>
          <Text style={styles.subtitle}>Subtitle Text</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 72,
    height: 48,
    borderRadius: 12,
  },
  textContainer: {
    padding: 8,
  },
  title: {
    fontFamily: "Lato",
    fontSize: 13,
    color: theme.colors.neutral.black,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 10,
    color: theme.colors.neutral.medium,
  },
});
