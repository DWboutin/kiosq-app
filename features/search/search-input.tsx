import { View, TextInput, StyleSheet } from "react-native";
import { SearchIcon } from "@/components/atoms/icons/search-icon/search-icon";
import { theme } from "@/components/atoms/theme/theme";

export const SearchInput = () => {
  return (
    <View style={styles.searchContainer}>
      <SearchIcon color="#666" />
      <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#666" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 8,
    backgroundColor: theme.colors.neutral.white,
    borderWidth: 1,
    borderColor: theme.colors.neutral.light,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 26,
    width: "100%",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});
