import { Navigator } from "expo-router";
import { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import * as Location from "expo-location";

export default function HomeScreen() {
  const [inputdata, setInputdata] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Pressable>
          <Text
            onPress={async (event) => {
              let { status } =
                await Location.requestForegroundPermissionsAsync();
              let location = await Location.getCurrentPositionAsync({});
              console.log(location, "location");
            }}
            style={styles.button}
          >
            Locate
          </Text>
        </Pressable>
      </View>
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
  text: {
    color: "#ffffff",
  },
});
