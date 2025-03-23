import { View, StyleSheet, Text, Dimensions } from "react-native";
import { SectionTitle } from "@/components/atoms/typography/section-title";
import { SearchProductButton } from "@/components/molecules/search-product-button/search-product-button";

export const SearchResultsProducts = () => {
  // Group items into pairs for 2 items per row
  const items = Array.from({ length: 10 });
  const rows = [];

  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }

  return (
    <View style={styles.container}>
      <View>
        <SectionTitle>Résultats de recherche</SectionTitle>
      </View>
      <View style={styles.rowsContainer}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((_, itemIndex) => {
              const index = rowIndex * 2 + itemIndex;
              return (
                <View key={index} style={styles.buttonWrapper}>
                  <SearchProductButton
                    productName="Pommes"
                    price={1.5}
                    unit="kg"
                    quantity="10"
                    vendorName="Fruitier"
                    distance="10 km"
                    productImage={{ uri: "https://picsum.photos/195/155" }}
                    vendorImage={{ uri: "https://picsum.photos/32/32" }}
                  />
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 16,
    padding: 24,
    paddingTop: 16,
  },
  rowsContainer: {
    flexDirection: "column",
    gap: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonWrapper: {
    width: "48%",
  },
});
