import { theme } from "@/components/atoms/theme/theme";
import { createContext, useContext, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScrollableSafeAreaContextValues {
  scrollSharedValue: SharedValue<number>;
}

const ScrollableSafeAreaContext = createContext({} as ScrollableSafeAreaContextValues);

export const useScrollableSafeAreaContext = () => {
  const context = useContext(ScrollableSafeAreaContext);

  if (context === undefined) {
    throw new Error("useScrollableSafeAreaContext must be used within ScrollableSafeAreaProvider");
  }

  return context;
};

interface ScrollableSafeAreaProviderProps {
  topComponent?: ReactNode;
  children: ReactNode;
}

export const ScrollableSafeAreaProvider = ({
  topComponent,
  children,
}: ScrollableSafeAreaProviderProps) => {
  const sv = useSharedValue<number>(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      "worklet";
      sv.value = event.contentOffset.y;
    },
  });

  return (
    <ScrollableSafeAreaContext.Provider
      value={{
        scrollSharedValue: sv,
      }}
    >
      <SafeAreaView style={styles.container} edges={["top", "right", "bottom", "left"]}>
        {topComponent}
        <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
          <View style={styles.innerContent}>{children}</View>
        </Animated.ScrollView>
      </SafeAreaView>
    </ScrollableSafeAreaContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    marginTop: -20,
    backgroundColor: theme.colors.white,
  },
  innerContent: {
    minHeight: "100%",
    paddingTop: 20,
    paddingBottom: 0,
  },
});
