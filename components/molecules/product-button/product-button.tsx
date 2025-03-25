import { PressableCard } from "@/components/atoms/pressable-card/pressable-card";
import { theme } from "@/components/atoms/theme/theme";
import { View, Text, StyleSheet, Image } from "react-native";

interface ProductButtonProps {
  onPress: () => void;
  productName: string;
  price: number;
  unit: string;
  quantity: string;
  productImage: any;
}

export const ProductButton = ({
  onPress,
  productName,
  price,
  unit,
  quantity,
  productImage,
}: ProductButtonProps) => {
  return (
    <PressableCard onPress={onPress}>
      <Image source={productImage} style={styles.productImage} resizeMode="cover" />
      <View style={styles.contentContainer}>
        <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
          {productName}
        </Text>
        <View style={styles.productPriceContainer}>
          <Text style={styles.productPrice}>{price.toFixed(2)} $</Text>
          <Text style={styles.productQuantity}>
            / {quantity} {unit}
          </Text>
        </View>
      </View>
    </PressableCard>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: "hidden",
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
});
