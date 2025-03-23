import "expo-dev-client";

import { ScrollView, StyleSheet, View } from "react-native";
import { useCallback } from "react";
import { CategoryButtons } from "@/components/sections/category-buttons/category-buttons";
import { BottomSheetProvider } from "@/components/ui/bottom-sheet/bottom-sheet-provider";
import { BottomSheet } from "@/components/ui/bottom-sheet/bottom-sheet";
import { useBottomSheet } from "@/components/ui/bottom-sheet/hooks/use-bottom-sheet";
import { MapView } from "@/features/mapview/mapview";
import { Search } from "@/features/search/search";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchProductButton } from "@/components/molecules/search-product-button/search-product-button";
import { SearchResultsProducts } from "@/components/sections/search-results-products/search-results-products";

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();
  // Use our custom hook to manage the bottom sheet
  const { ref: bottomSheetRef, present: presentBottomSheet } = useBottomSheet();

  // Log sheet changes
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // Handle button press to present the modal
  const handlePresentModalPress = useCallback(() => {
    presentBottomSheet();
  }, [presentBottomSheet]);

  return (
    <BottomSheetProvider>
      <View style={styles.container}>
        <Search />

        <MapView />
      </View>

      <BottomSheet
        initialIndex={1}
        snapPoints={["25%", "47%", "100%"]}
        onSheetChanges={handleSheetChanges}
        autoPresent={true}
      >
        <ScrollView>
          <SearchResultsProducts />
        </ScrollView>
        {/* <CategoryButtons /> */}
      </BottomSheet>
    </BottomSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    color: "#808080",
    bottom: "25%",
    left: -35,
    position: "absolute",
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    gap: 12,
    flexDirection: "row",
  },
});
