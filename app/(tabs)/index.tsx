import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import * as SecureStore from "expo-secure-store";

export default function HomeScreen() {
  const [started, setStarted] = useState(false);
  const [locations, setLocations] = useState<any>([]);
  const [startTime, setStartTime] = useState<any>();

  useEffect(() => {
    if (started) {
      const intervalId = setInterval(() => location_finder(), 250000);
      return () => clearInterval(intervalId);
    }
  }, [started]);

  const location_finder = async () => {
    console.log("Inside location finder");
    let location = await Location.getCurrentPositionAsync({});
    const longitude = location.coords.longitude;
    const latitude = location.coords.latitude;
    setLocations((prev: any) => [
      ...prev,
      {
        lat: (latitude * 3.14) / 180,
        lan: (longitude * 3.14) / 180,
      },
    ]);
    return location;
  };

  return (
    <ScrollView style={styles.wholescreen}>
      <View style={styles.container}>
        {started ? (
          <Pressable style={styles.sessions}>
            <Text
              onPress={async () => {
                await location_finder();
              }}
              style={styles.button}
            >
              Locate Me
            </Text>
            <Text
              onPress={async () => {
                const location = await location_finder();
                var Unix_to_String = new Date(
                  location.timestamp
                ).toDateString();

                //Split to get date
                const unix_toString_List = Unix_to_String.split(" ");

                //get the date
                const date = `${unix_toString_List[1]} ${unix_toString_List[2]}`;

                //time taken from the epoch start time and end time
                const time_taken = Math.abs(location.timestamp - startTime);

                //check for already present history
                const isHistory_available = await SecureStore.getItemAsync(
                  "History"
                ).then((res) => JSON.parse(res));

                //add distance to the local object
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
                //create to store history
                let arr = [
                  {
                    date: date,
                    travel_distance: km,
                    time_taken: time_taken,
                  },
                ];

                //if history available append old data and new data
                if (isHistory_available) {
                  arr = [...arr, ...isHistory_available];
                }
                const res = await SecureStore.setItemAsync(
                  "History",
                  JSON.stringify(arr)
                );

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
                //get permission for location -- need to implement error state
                let { status } =
                  await Location.requestForegroundPermissionsAsync();

                const location = await location_finder();

                //set start time in unix epoch
                setStartTime(location.timestamp);

                //set state to show end session button
                setStarted(true);
              }}
              style={styles.button}
            >
              Start Session
            </Text>
          </Pressable>
        )}
        {locations.length !== 0 && (
          <ScrollView
            style={{
              paddingTop: 50,
              flex: 1,
              flexDirection: "column",
            }}
          >
            {locations.map((solo_data: any, index: number) => (
              <Text
                style={{
                  color: "#ffffff",
                  paddingVertical: 15,
                }}
                key={index}
              >
                Latitude - {solo_data.lat} Longitude - {solo_data.lan}
              </Text>
            ))}
          </ScrollView>
        )}
      </View>
    </ScrollView>
  );
}

//can use this formula also
/* const tests = 12742 * 1/(Math.asin(Math.sqrt(Math.pow(Math.sin((lan2-lan1)/2),2))
   + Math.cos(lan1) * Math.cos(lan2) * Math.pow(Math.sin(lat2 - lat1), 2)))*/
// const test = 12742 × sin⁻¹(√[sin²((θ₂ - θ₁) /2) + cosθ₁ × cosθ₂ × sin²((φ₂ - φ₁)/2)])

const styles = StyleSheet.create({
  wholescreen: {
    flex: 1,
    borderWidth: 5,
    borderColor: "#800d16",
    borderRadius: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
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
