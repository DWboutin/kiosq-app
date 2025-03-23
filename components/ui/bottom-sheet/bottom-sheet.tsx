import React, { useCallback, useRef, useMemo, useEffect, ReactNode, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions,
  Modal,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
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
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const previousScrollY = useRef(0);

  // Create the animated value as a ref to avoid recreation
  const animatedPosition = useRef(new Animated.Value(0)).current;
  // Pre-configure the interpolation to avoid runtime errors
  const paddingTop = animatedPosition.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 0, 100],
    extrapolate: "clamp",
  });

  const snapPoints = useMemo(() => {
    return customSnapPoints || ["25%", "47%", "100%"];
  }, [customSnapPoints]);

  const effectiveInitialIndex = useMemo(() => {
    return initialIndex;
  }, [initialIndex]);

  // When index changes, record the new index
  const handleSheetChanges = (index: number) => {
    setCurrentIndex(index);

    if (onSheetChanges) {
      onSheetChanges(index);
    }
  };

  // This function handles the actual animation during movement
  const handleSheetAnimate = useCallback(
    (fromIndex: number, toIndex: number) => {
      // Use Animated.spring for smoother, more natural animation
      Animated.spring(animatedPosition, {
        toValue: toIndex,
        tension: 40,
        friction: 10,
        useNativeDriver: false,
      }).start();
    },
    [animatedPosition]
  );

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

  // Custom handler to detect pull to collapse
  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentScrollY = event.nativeEvent.contentOffset.y;

      // Check if we're at the top of the scroll
      if (currentScrollY <= 0) {
        if (
          currentIndex === snapPoints.length - 1 &&
          previousScrollY.current > currentScrollY &&
          currentScrollY === 0
        ) {
          console.log("Detected pull-to-collapse at top");
          bottomSheetModalRef.current?.snapToIndex(1);
        }
      }

      previousScrollY.current = currentScrollY;
    },
    [currentIndex, snapPoints.length]
  );

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

  // Determine if fully open
  const isFullyOpen = currentIndex === snapPoints.length - 1;

  // Wrap content in BottomSheetScrollView which is optimized for bottom sheet
  const wrappedChildren = useMemo(() => {
    // Only enable scrolling when fully opened
    const isScrollEnabled = isFullyOpen;

    return (
      <BottomSheetScrollView
        scrollEnabled={isScrollEnabled}
        onScroll={handleScroll}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainerBase}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Animated.View style={{ paddingTop, paddingBottom: 100 }}>{children}</Animated.View>
      </BottomSheetScrollView>
    );
  }, [children, isFullyOpen, handleScroll, paddingTop]);

  if (fullHeight) {
    return (
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => {}}
      >
        <SafeAreaView style={styles.fullHeightContainer}>
          <View style={styles.fullHeightContent}>{wrappedChildren}</View>
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
      onAnimate={handleSheetAnimate}
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
      {wrappedChildren}
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
  scrollView: {
    flex: 1,
  },
  scrollContainerBase: {
    minHeight: "100%",
  },
});
