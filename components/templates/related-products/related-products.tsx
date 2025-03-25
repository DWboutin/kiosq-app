import { theme } from "@/components/atoms/theme/theme";
import { SectionTitle } from "@/components/atoms/typography/section-title";
import { View, StyleSheet, FlatList } from "react-native";
import { ProductButton } from "@/components/molecules/product-button/product-button";
import { router } from "expo-router";

// Sample data for the related products
const RELATED_PRODUCTS = [
  {
    id: "1",
    productName: "Fraises biologiques",
    price: 4.99,
    unit: "barquette",
    quantity: "1",
    productImage: { uri: "https://picsum.photos/195/155?random=1" },
  },
  {
    id: "2",
    productName: "Tomates cerises",
    price: 3.5,
    unit: "panier",
    quantity: "1",
    productImage: { uri: "https://picsum.photos/195/155?random=2" },
  },
  {
    id: "3",
    productName: "Courgettes",
    price: 2.75,
    unit: "kg",
    quantity: "1",
    productImage: { uri: "https://picsum.photos/195/155?random=3" },
  },
  {
    id: "4",
    productName: "Poivrons rouges",
    price: 3.25,
    unit: "kg",
    quantity: "1",
    productImage: { uri: "https://picsum.photos/195/155?random=4" },
  },
];

export const RelatedProducts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <SectionTitle>Autres produits de ce producteur</SectionTitle>
      </View>

      <FlatList
        horizontal
        data={RELATED_PRODUCTS}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <ProductButton
              onPress={() => {
                router.navigate({
                  pathname: "/explore/products/[id]",
                  params: { id: item.id },
                });
              }}
              productName={item.productName}
              price={item.price}
              unit={item.unit}
              quantity={item.quantity}
              productImage={item.productImage}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.neutral.white,
    paddingBottom: 40,
  },
  titleContainer: {
    padding: 20,
  },
  scrollContent: {
    paddingHorizontal: 20, // Add extra padding at the end for better UX
    paddingBottom: 10,
  },
  productItem: {
    width: 200,
    marginRight: 16,
  },
});
