import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { theme } from "@/components/atoms/theme/theme";
import { EmailSignupForm } from "@/features/email-signup-form/email-signup-form";
import { useUserAuth } from "@/hooks/use-user-auth";

export default function EmailSignup() {
  const {
    selectors: { name: savedName, isAuthenticating },
    actions: { disconnectUser },
  } = useUserAuth();

  const handleResetUser = async () => {
    await disconnectUser();
  };

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {savedName ? `Bonjour ${savedName}` : "Entrez vos informations"}
        </Text>

        <Text style={styles.subtitle}>
          Nous vous enverrons un courriel avec un code à 6 chiffres de connection.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <EmailSignupForm />
        <View>
          <Text style={styles.smallText}>
            En créant mon compte, j'accepte les{" "}
            <Text
              style={styles.smallTextLink}
              onPress={() => {
                console.log("conditions générales");
              }}
            >
              conditions générales
            </Text>{" "}
            et la{" "}
            <Text
              style={styles.smallTextLink}
              onPress={() => {
                console.log("politique de confidentialité");
              }}
            >
              politique de confidentialité
            </Text>
          </Text>
        </View>
        <View style={styles.separator} />
        {savedName && (
          <Text style={styles.smallText}>
            Si vous n'êtes pas {savedName} et vous voulez créer un compte{" "}
            <Text style={styles.smallTextLink} onPress={handleResetUser}>
              cliquez ici
            </Text>
          </Text>
        )}
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
  termsLink: {
    color: theme.colors.primary.medium,
    fontFamily: theme.fonts.family.Inter.Medium,
    fontWeight: "600",
  },
  smallText: {
    fontSize: 14,
    fontFamily: theme.fonts.family.Inter.Regular,
    color: theme.colors.neutral.medium,
    marginTop: 4,
  },
  smallTextLink: {
    color: theme.colors.primary.medium,
    fontFamily: theme.fonts.family.Inter.Medium,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.neutral.lightest,
  },
});
