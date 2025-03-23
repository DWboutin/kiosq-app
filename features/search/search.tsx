import { View, StyleSheet } from "react-native";
import { SearchInput } from "@/features/search/search-input";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchResults } from "@/features/search/search-results";

export const Search = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.container, { top: insets.top }]}>
        <SearchInput />
        {/* <SearchResults /> */}
      </View>
      {/* <View style={styles.backdrop} pointerEvents="none" /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
    position: "absolute",
    left: 24,
    right: 24,
    zIndex: 1000,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 900,
  },
});
