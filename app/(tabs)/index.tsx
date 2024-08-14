import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [inputdata, setInputdata] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "powderblue" }} />
      <View style={{ flex: 2, backgroundColor: "skyblue" }} />
      <View style={{ flex: 3, backgroundColor: "steelblue" }} />
    </View>
  );
}

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
  textcolor: {
    color: "#ffffff",
    width: 420,
    borderWidth: 5,
    borderColor: "#ff0001",
    borderRadius: 0,
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 50,
  },
  input: {
    borderWidth: 2,
    borderColor: "#ffffff",
    padding: 2,
    height: 30,
    color: "#ffffff",
  },
});
