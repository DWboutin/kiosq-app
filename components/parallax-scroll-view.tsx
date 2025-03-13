import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
import { useBottomTabOverflow } from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import { theme } from "@/components/atoms/theme/theme";
import { Colors } from "@/constants/Colors";

const HEADER_HEIGHT = 480;
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  // Calculate minimum content height (screen height minus header height plus overlap)
  const minContentHeight = SCREEN_HEIGHT - HEADER_HEIGHT + 20; // 20 is the overlap value

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{
          paddingBottom: bottom,
          flexGrow: 1, // Ensures content can grow to fill available space
        }}
      >
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
        </Animated.View>
        <View
          style={[
            styles.content,
            {
              minHeight: minContentHeight,
            },
          ]}
        >
          {children}
        </View>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    borderRadius: theme.borderRadius.xlarge,
    overflow: "hidden",
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    borderTopLeftRadius: theme.borderRadius.xlarge,
    borderTopRightRadius: theme.borderRadius.xlarge,
    marginTop: -20, // Overlap with header to create a rounded top edge
    backgroundColor: "white",
  },
});
