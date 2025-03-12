import { Button } from "@/components/atoms/button/button";
import { IntroScreen } from "@/components/templates/intro-screen/intro-screen";
import { router } from "expo-router";
import * as Location from "expo-location";
import { Linking } from "react-native";
import { useState } from "react";
import { RejectedLocationModal } from "@/components/templates/rejected-location-modal/rejected-location-modal";

export default function LocalisationScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const askForLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setIsModalVisible(true);
      return;
    }

    await Location.getCurrentPositionAsync({});
    router.push("/explore");
  };

  const handleModify = () => {
    setIsModalVisible(false);
    Linking.openSettings();
  };

  const handleContinue = () => {
    setIsModalVisible(false);
    router.push("/explore");
  };

  return (
    <>
      <IntroScreen
        title="Partagez la localisation"
        subtitle="Explorez, réservez et soutenez les commerces locaux en toute simplicité."
        button={<Button label="Suivant" onPress={askForLocation} />}
        imageSrc={require("@/assets/images/localisation-image.png")}
        step={2}
      />
      <RejectedLocationModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onModify={handleModify}
        onContinue={handleContinue}
      />
    </>
  );
}
