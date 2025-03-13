import React, { useCallback, useRef, useMemo, useEffect, ReactNode } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { BottomSheetModal, BottomSheetScrollView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";

interface CustomBottomSheetProps {
  children: ReactNode;
  initialIndex?: number;
  snapPoints?: string[];
  autoPresent?: boolean;
  onSheetChanges?: (index: number) => void;
}

export const CustomBottomSheet = ({
  children,
  initialIndex = 1,
  snapPoints: customSnapPoints,
  autoPresent = true,
  onSheetChanges,
}: CustomBottomSheetProps) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => customSnapPoints || ["25%", "50%", "100%"], [customSnapPoints]);

  const currentIndexRef = useRef<number>(initialIndex);

  const handleSheetChanges = useCallback(
    (index: number) => {
      currentIndexRef.current = index;

      if (onSheetChanges) {
        onSheetChanges(index);
      }
    },
    [onSheetChanges]
  );

  useEffect(() => {
    if (autoPresent) {
      bottomSheetModalRef.current?.present();
    }
  }, [autoPresent]);

  const handleBackdropPress = useCallback(() => {
    bottomSheetModalRef.current?.snapToIndex(0);
  }, []);

  const expandToFull = useCallback(() => {
    const fullHeightIndex = snapPoints.length - 1;
    bottomSheetModalRef.current?.snapToIndex(fullHeightIndex);
  }, [snapPoints]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
        enableTouchThrough={true}
        pressBehavior="collapse"
        onPress={handleBackdropPress}
      />
    ),
    [handleBackdropPress]
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={initialIndex}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={{ backgroundColor: "#ffffff" }}
      handleIndicatorStyle={{ backgroundColor: "#999", width: 40, height: 4 }}
      enablePanDownToClose={false}
      enableDismissOnClose={false}
      topInset={0}
      backdropComponent={renderBackdrop}
      animateOnMount={true}
      enableContentPanningGesture={true}
      enableHandlePanningGesture={true}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      overDragResistanceFactor={3}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <BottomSheetScrollView bounces={false} showsVerticalScrollIndicator={true}>
          {children}
        </BottomSheetScrollView>
      </SafeAreaView>
    </BottomSheetModal>
  );
};
