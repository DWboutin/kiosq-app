import { Button } from "@/components/atoms/button/button";
import { theme } from "@/components/atoms/theme/theme";
import { Modal } from "@/components/molecules/modal/modal";
import { Text, View, StyleSheet } from "react-native";

type RejectedLocationModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onModify: () => void;
  onContinue: () => void;
};

export const RejectedLocationModal = ({
  isVisible,
  onClose,
  onModify,
  onContinue,
}: RejectedLocationModalProps) => {
  return (
    <Modal visible={isVisible} onClose={onClose}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Localisation</Text>
        <Text style={styles.paragraph}>
          Pour simplifier la recherche de commerces locaux, la localisation est utilisée et vous
          aide à trouver plus facilement les commerces près de vous.
        </Text>
        <Text style={styles.paragraph}>
          Vous pouvez modifier votre localisation dans les paramètres de votre appareil. Ou
          continuer sans localisation.
        </Text>
        <View style={styles.buttonContainer}>
          <Button label="Modifier" onPress={onModify} />
          <Button label="Continuer sans localisation" onPress={onContinue} variant="outline" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.family.Nunito.Regular,
    lineHeight: 32,
    color: theme.colors.neutral.black,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    fontFamily: theme.fonts.family.Nunito.Regular,
    lineHeight: 24,
    color: theme.colors.neutral.black,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginTop: 16,
  },
});
