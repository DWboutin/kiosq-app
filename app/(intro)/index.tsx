import { Button } from "@/components/atoms/button/button";
import { router } from "expo-router";
import { IntroScreen } from "@/components/templates/intro-screen/intro-screen";

export default function HomeScreen() {
  return (
    <IntroScreen
      title="Bienvenue dans kiosq"
      subtitle="Explorez, réservez et soutenez les commerces locaux en toute simplicité."
      button={<Button label="Commencer" onPress={() => router.push("/localisation")} />}
      imageSrc={require("@/assets/images/town-image.png")}
      step={1}
    />
  );
}
