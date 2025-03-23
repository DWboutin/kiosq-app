import { theme } from "@/components/atoms/theme/theme";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import {
  IntroScreenInfo,
  IntroScreenInfoProps,
} from "@/components/templates/intro-screen/intro-screen-info";
import { FC } from "react";
import { TopLinearGradient } from "@/components/atoms/top-linear-gradient/top-linear-gradient";

type IntroScreenProps = {
  imageSrc: ImageSourcePropType;
} & IntroScreenInfoProps;

export const IntroScreen: FC<IntroScreenProps> = ({ title, subtitle, button, step, imageSrc }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TopLinearGradient />
        <Image source={imageSrc} style={styles.headerImage} resizeMode="cover" />
      </View>
      <View style={styles.infoContainer}>
        <IntroScreenInfo title={title} subtitle={subtitle} button={button} step={step} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.colors.neutral.white,
  },
  imageContainer: {
    flex: 0,
    height: "65%",
    width: "100%",
    overflow: "hidden",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  textContainer: {
    padding: 16,
    alignItems: "center",
    backgroundColor: "gray",
    flex: 1,
    zIndex: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
  },
  infoContainer: {
    flex: 1,
    zIndex: 10,
  },
});
