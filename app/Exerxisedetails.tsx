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
      };
      res();
      setToggle(true);
    }
  }, [exercise_name]);

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ color: "#ffffff" }}>Exercisedetails</Text>
    </View>
  );
};

export default Exercisedetails;
