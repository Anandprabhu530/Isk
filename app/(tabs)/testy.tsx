import { Pressable, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getPreciseDistance } from "geolib";

let index = 0;
const testy = () => {
  const [data, setData] = useState(false);
  const [location, setLocation] = useState();

  useEffect(() => {
    if (data) {
      const timerid = setInterval(() => {
        printer();
      }, 1000);
      return () => clearInterval(timerid);
    }
  }, [data]);

  useEffect(() => {
    console.log(location);
  }, [location]);

  const printer = () => {
    if (index >= a.length) {
      setData(false);
      return;
    }
    setLocation({ lat: a[index].latitude, lan: a[index].longitude });
    index++;
  };

  let a = [
    { latitude: 10.5704012, longitude: 77.2396526 },
    { latitude: 10.5699159, longitude: 77.2392123 },
    { latitude: 10.569984, longitude: 77.2392339 },
    { latitude: 10.5688414, longitude: 77.2386574 },
    { latitude: 10.5694638, longitude: 77.2389199 },
    { latitude: 10.5695481, longitude: 77.2384488 },
  ];

  return (
    <View>
      <Pressable onPress={() => setData(true)}>
        <Text
          style={{
            marginTop: 70,
            color: "#ffffff",
            borderWidth: 2,
            borderColor: "#ffffff",
            padding: 10,
          }}
        >
          testy
        </Text>
      </Pressable>
    </View>
  );
};

export default testy;
