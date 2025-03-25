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
import { MapView } from "@/features/mapview/mapview";
import { VendorMapPopup } from "@/components/templates/vendor-map-popup/vendor-map-popup";

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
            <View style={styles.mapViewContainer}>
              <MapView />
              <View style={styles.vendorPopupContainer}>
                <VendorMapPopup
                  title="Producteur local"
                  vendorName="Ferme Jean-Pierre Plante"
                  onPress={() => console.log("Voir la page")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  content: {
    flex: 1,
    paddingBottom: 100,
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
  mapViewContainer: {
    position: "relative",
    height: 220,
  },
  vendorPopupContainer: {
    position: "absolute",
    bottom: 36,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 1,
  },
});
