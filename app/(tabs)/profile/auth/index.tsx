import { theme } from "@/components/atoms/theme/theme";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { AuthButton } from "@/components/atoms/auth-button/auth-button";
import { FontAwesome } from "@expo/vector-icons";
import { GoogleIcon } from "@/components/atoms/icons/google-icon/google-icon";
import { MetaIcon } from "@/components/atoms/icons/meta-icon/meta-icon";
import { EmailIcon } from "@/components/atoms/icons/email-icon/email-icon";
import { router } from "expo-router";

export default function AuthScreen() {
  // const { user, signOut } = useSupabaseAuth();

  const handleGoogleAuth = () => {
    // Handle Google authentication
  };

  const handleAppleAuth = () => {
    // Handle Apple authentication
  };

  const handleMetaAuth = () => {
    // Handle Meta authentication
  };

  const handleEmailAuth = () => {
    router.push("/(tabs)/profile/auth/(email)/email-signup");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={require("@/assets/images/auth-image.png")} style={styles.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Créez un compte pour commander</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AuthButton
            label="Continuer avec Google"
            onPress={handleGoogleAuth}
            icon={() => (
              <View style={styles.iconStyle}>
                <GoogleIcon />
              </View>
            )}
          />
          <AuthButton
            label="Continuer avec Apple"
            onPress={handleAppleAuth}
            icon={() => <FontAwesome name="apple" size={24} color={theme.colors.neutral.black} />}
          />
          <AuthButton
            label="Continuer avec Meta"
            onPress={handleMetaAuth}
            icon={() => (
              <View style={styles.iconStyle}>
                <MetaIcon />
              </View>
            )}
          />
          <AuthButton
            label="Avec mon courriel"
            onPress={handleEmailAuth}
            icon={() => <EmailIcon color={theme.colors.neutral.black} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 100,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 225,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 80,
    marginBottom: 56,
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.family.Inter.Regular,
    color: theme.colors.primary.dark,
    textAlign: "center",
  },
  buttonContainer: {
    gap: 16,
    paddingHorizontal: 20,
  },
  iconStyle: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
});
