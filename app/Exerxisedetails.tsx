import { View, Text } from "react-native";
import React from "react";

const Exercisedetails = ({ exercise_name }) => {
  console.log(exercise_name);
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ color: "#ffffff" }}>Exercisedetails</Text>
    </View>
  );
};

export default Exercisedetails;
