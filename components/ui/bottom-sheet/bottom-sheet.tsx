import React, { useCallback, useRef, useMemo, useEffect, ReactNode, useState } from "react";
import { StyleSheet, SafeAreaView, View, Dimensions, Modal, Animated } from "react-native";
import { BottomSheetModal, BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import { theme } from "@/components/atoms/theme/theme";

interface CustomBottomSheetProps {
  children: ReactNode;
  initialIndex?: number;
  snapPoints?: string[];
  autoPresent?: boolean;
  onSheetChanges?: (index: number) => void;
  fullHeight?: boolean;
}

export const BottomSheet = ({
  children,
  initialIndex = 1,
  snapPoints: customSnapPoints,
  autoPresent = true,
  onSheetChanges,
  fullHeight = false,
}: CustomBottomSheetProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const paddingAnimation = useRef(new Animated.Value(0)).current;

  const snapPoints = useMemo(() => {
    return customSnapPoints || ["25%", "47%", "100%"];
  }, [customSnapPoints]);

  const effectiveInitialIndex = useMemo(() => {
    return initialIndex;
  }, [initialIndex]);

  const handleSheetChanges = (index: number) => {
    if (onSheetChanges) {
      onSheetChanges(index);
    }
  };

  const handleAnimate = (fromIndex: number, toIndex: number) => {
    Animated.timing(paddingAnimation, {
      toValue: toIndex === snapPoints.length ? 100 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (autoPresent) {
      if (fullHeight) {
        setIsModalVisible(true);
      } else {
        bottomSheetModalRef.current?.present();
      }
    }
  }, [autoPresent, fullHeight]);

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
        disappearsOnIndex={1}
        appearsOnIndex={1}
        enableTouchThrough={true}
        enableDynamicSizing={false}
        pressBehavior="collapse"
        onPress={handleBackdropPress}
      />
    ),
    [handleBackdropPress]
  );

  const renderHandle = useCallback(() => {
    return (
      <View style={styles.handleContainer}>
        <View style={styles.handleIndicator} />
      </View>
    );
  }, []);

  if (fullHeight) {
    return (
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => {}}
      >
        <SafeAreaView style={styles.fullHeightContainer}>
          <View style={styles.fullHeightContent}>{children}</View>
        </SafeAreaView>
      </Modal>
    );
  }

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={effectiveInitialIndex}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      onAnimate={handleAnimate}
      backgroundStyle={{
        backgroundColor: theme.colors.neutral.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
      handleComponent={renderHandle}
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
      <BottomSheetView style={styles.contentContainer}>
        <Animated.View
          style={{
            flex: 1,
            paddingTop: paddingAnimation,
            paddingBottom: 16,
          }}
        >
          {children}
        </Animated.View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  handleContainer: {
    paddingTop: 16,
    paddingBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  handleIndicator: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.neutral.medium,
  },
  fullHeightContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  fullHeightContent: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});
