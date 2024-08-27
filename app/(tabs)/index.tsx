import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import * as SecureStore from "expo-secure-store";
import { getPreciseDistance } from "geolib";
import { Link } from "expo-router";

export default function HomeScreen() {
  const [started, setStarted] = useState(false);
  const [locations, setLocations] = useState<any>();
  const [startTime, setStartTime] = useState<any>();
  const [timer, setTimer] = useState<any>(null);
  const [km, setKm] = useState(0.0);

  useEffect(() => {
    //ping location for every 20 seconds
    if (started) {
      //for now this is good - all platform
      const intervalId = setInterval(async () => await location_finder(), 5000);
      return () => clearInterval(intervalId);

      //only for android
      // const res = async () => {
      //   const watchLocation = await Location.watchPositionAsync(
      //     {
      //       accuracy: Location.Accuracy.Highest,
      //       timeInterval: 5000,
      //       distanceInterval: 0,
      //     },
      //     (newLocation) => {
      //       const calculatedDistance = getPreciseDistance(
      //         { latitude: location.lat, longitude: location.lon },
      //         newLocation.coords
      //       );
      //       setKm(km + calculatedDistance);
      //       console.log("km: ", km, " distance: ", calculatedDistance);

      //       setLocations(newLocation.coords);
      //     }
      //   );

      //   return () => watchLocation.remove();
      // };
      // res();
    }
  }, [started]);

  //timer
  useEffect(() => {
    if (started) {
      const timerid = setInterval(() => {
        setTimer(Date.now() - startTime);
      }, 1000);
      return () => clearInterval(timerid);
    }
  }, [started]);

  //find location
  const location_finder = async () => {
    console.log("Inside location finder");
    let location = await Location.getCurrentPositionAsync();
    const longitude = location.coords.longitude;
    const latitude = location.coords.latitude;

    console.log(locations);
    console.log("latitude: ", latitude, "longitude: ", longitude);
    if (started) {
      const distance = getPreciseDistance(
        {
          latitude: locations.lat,
          longitude: locations.lan,
        },
        { latitude: latitude, longitude: longitude }
      );
      setKm((prev) => prev + distance / 1000);
      setLocations({
        lat: latitude,
        lan: longitude,
      });
    } else {
      setLocations({
        lat: latitude,
        lan: longitude,
      });
      return location;
    }
  };

  return (
    <ScrollView style={styles.wholescreen}>
      <View style={styles.container}>
        {started ? (
          <Pressable style={{ alignItems: "center" }}>
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
                  setStarted(false);
                  const end_time = Date.now();
                  var Unix_to_String = new Date(end_time).toDateString();

                  //Split to get date
                  const unix_toString_List = Unix_to_String.split(" ");

                  //get the date
                  const date = `${unix_toString_List[1]} ${unix_toString_List[2]}`;

                  //time taken from the epoch start time and end time
                  const time_taken = Math.abs(end_time - startTime);

                  //check for already present history
                  // const isHistory_available = await SecureStore.getItemAsync(
                  //   "History"
                  // ).then((res) => JSON.parse(res));

                  //create to store history
                  let arr = [
                    {
                      date: date,
                      travel_distance: km,
                      time_taken: time_taken,
                    },
                  ];

                  // if history available append old data and new data
                  // if (isHistory_available) {
                  //   arr = [...arr, ...isHistory_available];
                  // }
                  const res = await SecureStore.setItemAsync(
                    "History",
                    JSON.stringify(arr)
                  );

                  setLocations({});
                }}
                style={styles.button}
              >
                End Session
              </Text>
            </Pressable>
            <Text style={styles.timer}>
              {timer && (timer / (1000 * 60 * 60)) % 60 > 10
                ? Math.floor((timer / (1000 * 60 * 60)) % 60)
                : "0" + Math.floor((timer / (1000 * 60 * 60)) % 60)}{" "}
              :{" "}
              {timer && (timer / (1000 * 60)) % 60 > 10
                ? Math.floor((timer / (1000 * 60)) % 60)
                : "0" + Math.floor((timer / (1000 * 60)) % 60)}{" "}
              :{" "}
              {timer && (timer / 1000) % 60 > 10
                ? Math.floor((timer / 1000) % 60)
                : "0" + Math.floor((timer / 1000) % 60)}
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
        {/* {locations.length !== 0 && (
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
                Latitude - {solo_data.lat.toFixed(3)} {"    "}Longitude -
                {solo_data.lan.toFixed(3)}
              </Text>
            ))}
          </ScrollView>
        )} */}
        <View style={{ paddingTop: 30 }}>
          <Link href="/(tabs)/exercise/exercise" style={styles.button}>
            Exercise
          </Link>
        </View>
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
  timer: {
    marginVertical: 100,
    fontSize: 40,
    color: "#ffffff",
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
