import { theme } from "@/components/atoms/theme/theme";
import { View, StyleSheet, ScrollView } from "react-native";
import { SearchResult } from "@/features/search/search-result";

export const SearchResults = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.resultsContainer}>
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 26,
    backgroundColor: theme.colors.neutral.white,
    height: 400,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultsContainer: {
    gap: 8,
    padding: 16,
  },
});
