import { Text, View, StyleSheet } from "react-native";
import { theme } from "@/components/atoms/theme/theme";
import { EmailSignupForm } from "@/features/email-signup-form/email-signup-form";

export default function EmailSignup() {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Entrez vos informations</Text>
        <Text style={styles.subtitle}>
          Nous vous enverrons un courriel avec un lien de connection.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <EmailSignupForm />
        <View>
          <Text style={styles.termsText}>
            En créant mon compte, j'accepte les{" "}
            <Text
              style={styles.termsLink}
              onPress={() => {
                console.log("conditions générales");
              }}
            >
              conditions générales
            </Text>{" "}
            et la{" "}
            <Text
              style={styles.termsLink}
              onPress={() => {
                console.log("politique de confidentialité");
              }}
            >
              politique de confidentialité
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.neutral.white,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  title: {
    fontFamily: theme.fonts.family.Inter.Semibold,
    fontWeight: "600",
    fontSize: 24,
    color: theme.colors.neutral.black,
  },
  subtitle: {
    fontFamily: theme.fonts.family.Inter.Regular,
    fontSize: 16,
    color: theme.colors.neutral.medium,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  termsText: {
    fontSize: 14,
    fontFamily: theme.fonts.family.Inter.Regular,
    color: theme.colors.neutral.medium,
  },
  termsLink: {
    color: theme.colors.primary.medium,
    fontFamily: theme.fonts.family.Inter.Medium,
    fontWeight: "600",
  },
});
