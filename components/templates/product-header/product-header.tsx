import { Button } from "@/components/atoms/button/button";
import { CheckIcon } from "@/components/atoms/icons/check-icon/check-icon";
import { ClockIcon } from "@/components/atoms/icons/clock-icon/clock-icon";
import { LocationPinIcon } from "@/components/atoms/icons/location-pin-icon/location-pin-icon";
import { theme } from "@/components/atoms/theme/theme";
import { productCategories } from "@/utils/product-categories";
import { View, StyleSheet, Text } from "react-native";

const bulletList = [
  "Fraises 100 % biologiques cultivées sans pesticides",
  "Goût sucré et acidulé, parfaites pour desserts, smoothies ou nature",
  "Cueillette locale – Directement du champ à votre table",
  "Certifiées bio par Ecocert Canada",
];

export const ProductHeader = () => {
  const category = "fruits";
  const productCategory = productCategories.find(
    (productCategory) => productCategory.name === category
  )!;
  const Icon = productCategory.icon;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Product Name</Text>
        <View style={styles.productDetailsContainer}>
          <View style={styles.category}>
            <View style={styles.categoryIcon}>
              <Icon color={theme.colors.neutral.medium} />
            </View>
            <Text style={styles.categoryText}>{productCategory?.text}</Text>
          </View>
          <Text style={styles.categoryText}>•</Text>
          <View style={styles.category}>
            <View style={styles.categoryIcon}>
              <LocationPinIcon color={theme.colors.neutral.medium} />
            </View>
            <Text style={styles.categoryText}>1 km</Text>
          </View>
          <Text style={styles.categoryText}>•</Text>
          <View style={styles.category}>
            <View style={styles.categoryIcon}>
              <ClockIcon color={theme.colors.neutral.medium} />
            </View>
            <Text style={styles.categoryText}>24h</Text>
          </View>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>$10</Text>
        <View style={styles.priceTextContainer}>
          <Text style={styles.priceText}>/ 500g</Text>
        </View>
      </View>
      <View style={styles.bulletListContainer}>
        {bulletList.map((bullet, index) => (
          <View style={styles.bulletContainer} key={index}>
            <View style={styles.bulletIcon}>
              <CheckIcon color={theme.colors.neutral.black} />
            </View>
            <Text style={styles.bulletText}>{bullet}</Text>
          </View>
        ))}
      </View>
      <Button label="Réserver le produit" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 20,
    paddingTop: 30,
  },
  titleContainer: {
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: theme.fonts.family.Inter.Semibold,
    color: theme.colors.neutral.black,
  },
  productDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  categoryText: {
    fontSize: 12,
    fontFamily: theme.fonts.family.Inter.Regular,
    color: theme.colors.neutral.medium,
  },
  categoryIcon: {
    width: 12,
    height: 12,
  },
  priceContainer: {
    flexDirection: "row",
    gap: 4,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: theme.fonts.family.Lato.Bold,
    color: theme.colors.neutral.black,
  },
  priceTextContainer: {
    paddingTop: 6,
  },
  priceText: {
    fontSize: 16,
    fontFamily: theme.fonts.family.Lato.Regular,
    color: theme.colors.neutral.medium,
  },
  bulletListContainer: {
    flexDirection: "column",
    gap: 4,
  },
  bulletContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bulletIcon: {
    width: 12,
    height: 12,
  },
  bulletText: {
    fontSize: 10,
    fontFamily: theme.fonts.family.Lato.Regular,
    color: theme.colors.neutral.black,
  },
});
