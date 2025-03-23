import { View, StyleSheet } from "react-native";
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
          <View key={category.name} style={styles.buttonWrapper}>
            <CategoryButton
              backgroundColor={category.backgroundColor}
              contentColor={category.contentColor}
              icon={category.icon}
              text={category.text}
            />
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
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  buttonWrapper: {
    flexBasis: "30%",
    flexGrow: 1,
    aspectRatio: 1,
    maxWidth: "30%",
  },
});
