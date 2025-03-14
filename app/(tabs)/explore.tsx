import "expo-dev-client";

import { StyleSheet, View, Text, Pressable, SafeAreaView } from "react-native";
import { useCallback } from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { CategoryButtons } from "@/components/sections/category-buttons/category-buttons";
import { BottomSheetProvider } from "@/components/bottom-sheet/bottom-sheet-provider";
import { BottomSheet } from "@/components/bottom-sheet/bottom-sheet";
import { useBottomSheet } from "@/components/bottom-sheet/hooks/use-bottom-sheet";

import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken(
  "pk.eyJ1IjoidG9vc2FsdHkiLCJhIjoiY204OTZlYmdvMHpodDJyb21md2Y3dW5hcyJ9.dGMXtSJp5OpLhyWzPpG0IA"
);

export default function ExploreScreen() {
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
      <View style={styles.mapContainer}>
        <Mapbox.MapView style={styles.map} />
      </View>

      <BottomSheet
        initialIndex={1}
        snapPoints={["25%", "50%", "100%"]}
        onSheetChanges={handleSheetChanges}
        autoPresent={true}
      >
        <CategoryButtons />
      </BottomSheet>
    </BottomSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#f0f0f0",
  },
  headerImage: {
    color: "#808080",
    bottom: "25%",
    left: -35,
    position: "absolute",
    zIndex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
