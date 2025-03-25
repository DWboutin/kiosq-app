import { Button, buttonSizeStyles, buttonStyles } from "@/components/atoms/button/button";
import { ArrowIcon } from "@/components/atoms/icons/arrow-icon/arrow-icon";
import { theme } from "@/components/atoms/theme/theme";
import { StyleSheet, Text, View } from "react-native";

type VendorMapPopupProps = {
  title: string;
  vendorName: string;
  onPress: () => void;
};

export const VendorMapPopup = ({ title, vendorName, onPress }: VendorMapPopupProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.vendorName}>{vendorName}</Text>
      <View style={styles.buttonContainer}>
        <Button
          size="sm"
          onPress={onPress}
          fitContent={true}
          label={
            <View style={styles.button}>
              <Text style={[buttonStyles.label, buttonSizeStyles.sm.label, styles.labelText]}>
                Voir la page
              </Text>
              <View style={styles.arrowContainer}>
                <ArrowIcon direction="right" color={theme.colors.neutral.white} />
              </View>
            </View>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 12,
    alignSelf: "flex-start",
    width: "auto",
    maxWidth: "100%",
    backgroundColor: theme.colors.neutral.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  title: {
    fontSize: 10,
    fontFamily: theme.fonts.family.Lato.Regular,
    color: theme.colors.neutral.darker,
    marginBottom: 2,
  },
  vendorName: {
    fontSize: 14,
    fontFamily: theme.fonts.family.Lato.Bold,
    color: theme.colors.neutral.black,
  },
  buttonContainer: {
    flex: 0,
    marginTop: 12,
    alignSelf: "flex-start",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "auto",
    gap: 4,
  },
  labelText: {
    flex: 0,
    textAlign: "left",
  },
  arrowContainer: {
    width: 12,
    height: 12,
  },
});
