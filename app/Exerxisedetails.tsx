import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

const Exercisedetails = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const exercise_name = useLocalSearchParams();

  useEffect(() => {
    if (!toggle) {
      const res = async () => {
        const exercise_data = await JSON.parse(exercise_name.exercise_name);
        setData(exercise_data);
        console.log(exercise_data.name);
      };
      res();
      setToggle(true);
    }
  }, [exercise_name]);

  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: "#ffffff",
        flex: 1,
      }}
    >
      <Text
        style={{
          color: "#ffffff",
          flex: 0.4,
          borderWidth: 2,
          borderColor: "#ffffff",
        }}
      >
        Video Session
      </Text>
      <Text
        style={{
          color: "#ffffff",
          borderWidth: 2,
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderColor: "#ffffff",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        {data && data.name}
      </Text>
      <Text style={{ color: "#ffffff", padding: 20 }}>
        Timer component below
      </Text>
    </View>
  );
};

export default Exercisedetails;
