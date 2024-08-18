import { Navigator } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

export default function HomeScreen() {
  const [started, setStarted] = useState(false);
  const [locations, setLocations] = useState([
    { lat: 0.18448704232371044, lan: 1.3480867536214232 },
    { lat: 0.1842454206873936, lan: 1.3479561261988868 },
    { lat: 0.18386362991351987, lan: 1.3478056613640725 },
  ]);
  const [distance, setDistance] = useState<number>();

  useEffect(() => {
    if (locations.length >= 2) {
      let km = 0;
      for (let i = 1; i < locations.length; i++) {
        const dLat = locations[i].lat - locations[i - 1].lat;
        const dLon = locations[i].lat - locations[i - 1].lat;
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(locations[i - 1].lat) *
            Math.cos(locations[i].lat) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        km += 6371 * c;
      }
      setDistance(km);
      console.log(km);
    }
  }, [locations]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {started ? (
          <Pressable style={styles.sessions}>
            <Text
              onPress={async () => {
                console.log("Added Location");
                let location = await Location.getCurrentPositionAsync({});
                const longitude = location.coords.longitude;
                const latitude = location.coords.latitude;
                setLocations((prev) => [
                  ...prev,
                  {
                    lat: (latitude * 3.14) / 180,
                    lan: (longitude * 3.14) / 180,
                  },
                ]);
              }}
              style={styles.button}
            >
              Locate Me
            </Text>
            <Text
              onPress={async () => {
                console.log("Session ended");
                let location = await Location.getCurrentPositionAsync({});
                const longitude = location.coords.longitude;
                const latitude = location.coords.latitude;
                setStarted(false);
                setLocations([]);
              }}
              style={styles.button}
            >
              End Session
            </Text>
          </Pressable>
        ) : (
          <Pressable>
            <Text
              onPress={async () => {
                let { status } =
                  await Location.requestForegroundPermissionsAsync();
                let location = await Location.getCurrentPositionAsync({});
                console.log("session Started");
                const longitude = location.coords.longitude;
                const latitude = location.coords.latitude;
                setLocations((prev) => [
                  {
                    lat: (latitude * 3.14) / 180,
                    lan: (longitude * 3.14) / 180,
                  },
                ]);
                setStarted(true);
              }}
              style={styles.button}
            >
              Start Session
            </Text>
          </Pressable>
        )}
        {locations.length !== 0 && (
          <View
            style={{
              paddingTop: 50,
              flex: 1,
              flexDirection: "column",
              gap: 20,
            }}
          >
            {locations.map((solo_data, index: number) => (
              <Text style={{ color: "#ffffff" }}>
                Latitude - {solo_data.lat} Longitude - {solo_data.lan}
              </Text>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}
// const tests = 12742 * 1/(Math.asin(Math.sqrt(Math.pow(Math.sin((lan2-lan1)/2),2)) + Math.cos(lan1)*Math.cos(lan2)*Math.pow(Math.sin(lat2-lat1),2)))
// const test = 12742 × sin⁻¹(√[sin²((θ₂ - θ₁) /2) + cosθ₁ × cosθ₂ × sin²((φ₂ - φ₁)/2)])

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 5,
    borderColor: "thistle",
    borderRadius: 0,
    paddingTop: 50,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "#ffffff",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#ffffff",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#ffffff",
    padding: 2,
    height: 30,
    color: "#ffffff",
  },
  sessions: {
    flexDirection: "row",
    padding: 10,
    gap: 20,
  },
});
