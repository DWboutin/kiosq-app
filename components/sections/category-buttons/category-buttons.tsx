import { View, StyleSheet, Text } from "react-native";
import { productCategories } from "@/utils/product-categories";
import { CategoryButton } from "@/components/molecules/category-button/category-button";
import { SectionTitle } from "@/components/atoms/typography/section-title";

export const CategoryButtons = () => {
  return (
    <View style={styles.container}>
      <View>
        <SectionTitle>Naviguer par catégories</SectionTitle>
      </View>
      <View style={styles.gridContainer}>
        {productCategories.map((category) => (
          <CategoryButton
            key={category.name}
            backgroundColor={category.backgroundColor}
            contentColor={category.contentColor}
            icon={category.icon}
            text={category.text}
          />
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
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
});
