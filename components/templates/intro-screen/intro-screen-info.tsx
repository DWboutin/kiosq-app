import { Button } from "@/components/atoms/button/button";
import { theme } from "@/components/atoms/theme/theme";
import { router } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export type IntroScreenInfoProps = {
  title: string;
  subtitle: string;
  button: React.ReactNode;
  step: number;
};

export const IntroScreenInfo = ({ title, subtitle, button, step }: IntroScreenInfoProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.circleContainer}>
        <View style={[styles.circle, step === 1 ? styles.activeCircle : undefined]} />
        <View style={[styles.circle, step === 2 ? styles.activeCircle : undefined]} />
        <View style={styles.circle} />
      </View>
      <View style={styles.buttonContainer}>{button}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: theme.fonts.family.Nunito.Bold,
    lineHeight: 32,
    color: theme.colors.neutral.darker,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: theme.fonts.family.Lato.Regular,
    lineHeight: 24,
    textAlign: "center",
    color: theme.colors.neutral.darker,
  },
  circleContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    paddingVertical: 32,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.neutral.light,
  },
  activeCircle: {
    backgroundColor: theme.colors.primary.medium,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
