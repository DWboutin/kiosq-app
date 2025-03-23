import "expo-dev-client";

import { StyleSheet, View } from "react-native";
import { useCallback } from "react";
import { CategoryButtons } from "@/components/sections/category-buttons/category-buttons";
import { BottomSheetProvider } from "@/components/ui/bottom-sheet/bottom-sheet-provider";
import { BottomSheet } from "@/components/ui/bottom-sheet/bottom-sheet";
import { useBottomSheet } from "@/components/ui/bottom-sheet/hooks/use-bottom-sheet";
import { MapView } from "@/features/mapview/mapview";
import { Search } from "@/features/search/search";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchProductButton } from "@/components/molecules/search-product-button/search-product-button";

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
        <View style={styles.contentContainer}>
          <SearchProductButton
            productName="Pommes du verger fraîches qui goûte bon dans yeule"
            price={1.5}
            unit="kg"
            quantity="10"
            vendorName="Fruitier"
            distance="10 km"
            productImage={{ uri: "https://picsum.photos/195/155" }}
            vendorImage={{ uri: "https://picsum.photos/32/32" }}
          />
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
