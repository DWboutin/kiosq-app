import "expo-dev-client";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { theme } from "@/components/atoms/theme/theme";
import { ProductHeader } from "@/components/templates/product-header/product-header";

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://picsum.photos/400/250" }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <ScrollView
        style={styles.scrollContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.scrollContent}>
          <View style={styles.content}>
            <ProductHeader />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

type Styles = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  scrollContainer: ViewStyle;
  scrollContent: ViewStyle;
  content: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: 240,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  scrollContainer: {
    flex: 1,
    zIndex: 1,
  },
  scrollContent: {
    paddingTop: 220, // Slightly less than image height to create overlap
    minHeight: 4000, // Using a number instead of a string with "px"
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 100, // Make room for back button
    backgroundColor: theme.colors.neutral.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
