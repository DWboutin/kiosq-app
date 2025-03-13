import { StyleSheet, View, Text, Pressable, SafeAreaView } from "react-native";
import { useCallback } from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { CategoryButtons } from "@/components/sections/category-buttons/category-buttons";
import { BottomSheetProvider } from "@/components/bottom-sheet/bottom-sheet-provider";
import { BottomSheet } from "@/components/bottom-sheet/bottom-sheet";
import { useBottomSheet } from "@/components/bottom-sheet/hooks/use-bottom-sheet";

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
      <SafeAreaView style={styles.container}>
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />

        <BottomSheet
          initialIndex={1}
          snapPoints={["25%", "50%", "100%"]}
          onSheetChanges={handleSheetChanges}
          autoPresent={true}
        >
          <CategoryButtons />
        </BottomSheet>
      </SafeAreaView>
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
});
