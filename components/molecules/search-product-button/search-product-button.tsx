import { LocationPinIcon } from "@/components/atoms/icons/location-pin-icon/location-pin-icon";
import { theme } from "@/components/atoms/theme/theme";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface SearchProductButtonProps {
  onPress?: () => void;
  productName: string;
  price: number;
  unit: string;
  quantity: string;
  vendorName: string;
  distance: string;
  productImage: any;
  vendorImage: any;
}

export const SearchProductButton = ({
  onPress,
  productName,
  price,
  unit,
  quantity,
  vendorName,
  distance,
  productImage,
  vendorImage,
}: SearchProductButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={productImage} style={styles.productImage} resizeMode="cover" />
      <View style={styles.contentContainer}>
        <View style={styles.avatarContainer}>
          <Image source={vendorImage} style={styles.avatarImage} resizeMode="cover" />
        </View>
        <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
          {productName}
        </Text>
        <View style={styles.productPriceContainer}>
          <Text style={styles.productPrice}>{price.toFixed(2)} $</Text>
          <Text style={styles.productQuantity}>
            / {quantity} {unit}
          </Text>
        </View>
        <Text style={styles.vendorName}>{vendorName}</Text>
        <View style={styles.distanceContainer}>
          <View style={styles.distanceIconContainer}>
            <LocationPinIcon />
          </View>
          <Text style={styles.distance}>{distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 155,
    height: 220,
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
  productImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: "hidden",
  },
  avatarContainer: {
    position: "absolute",
    top: -16,
    right: 8,
    width: 34,
    height: 34,
    borderRadius: 17,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "white",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    padding: 12,
    gap: 4,
  },
  productName: {
    fontSize: 13,
    fontFamily: theme.fonts.family.Lato.Bold,
    fontWeight: "700",
    marginBottom: 4,
    height: 34,
  },
  productPriceContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "flex-end",
  },
  productPrice: {
    fontSize: 16.6,
    fontFamily: theme.fonts.family.Lato.Bold,
    fontWeight: "700",
    color: theme.colors.neutral.black,
  },
  productQuantity: {
    fontSize: 12,
    fontFamily: theme.fonts.family.Lato.Regular,
    fontWeight: "400",
    color: theme.colors.neutral.medium,
  },
  vendorName: {
    fontSize: 12,
    fontFamily: theme.fonts.family.Lato.Regular,
    fontWeight: "400",
    color: theme.colors.neutral.black,
  },
  distanceContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "flex-end",
  },
  distanceIconContainer: {
    width: 12,
    height: 12,
  },
  distance: {
    fontSize: 10,
    fontFamily: theme.fonts.family.Lato.Regular,
    fontWeight: "400",
    color: theme.colors.neutral.medium,
  },
});
