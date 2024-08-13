import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textcolor}>Hello World</Text>
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
});
