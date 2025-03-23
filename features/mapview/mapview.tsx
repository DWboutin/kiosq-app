import { TopLinearGradient } from "@/components/atoms/top-linear-gradient/top-linear-gradient";
import { getLocation } from "@/utils/get-location";
import Mapbox from "@rnmapbox/maps";
import { LinearGradient } from "expo-linear-gradient";
import { LocationObject } from "expo-location";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

Mapbox.setAccessToken(
  "pk.eyJ1IjoidG9vc2FsdHkiLCJhIjoiY204OTZlYmdvMHpodDJyb21md2Y3dW5hcyJ9.dGMXtSJp5OpLhyWzPpG0IA"
);

export const MapView = () => {
  const [location, setLocation] = useState<[number, number]>([-71.208, 46.8139]);

  useEffect(() => {
    const fetchLocation = async () => {
      const location = await getLocation();

      if (location) {
        const offsetLatitude = location.coords.latitude - 0.05; // to have location puck always visible
        setLocation([location.coords.longitude, offsetLatitude]);
      }
    };
    fetchLocation();
  }, []);

  return (
    <View style={styles.container}>
      <TopLinearGradient />
      <Mapbox.MapView
        style={styles.map}
        compassEnabled={false}
        scaleBarEnabled={false}
        rotateEnabled={false}
      >
        <Mapbox.Camera
          zoomLevel={10}
          centerCoordinate={location}
          animationMode="flyTo"
          animationDuration={2000}
        />
        <Mapbox.LocationPuck visible={true} puckBearingEnabled={true} />
      </Mapbox.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
