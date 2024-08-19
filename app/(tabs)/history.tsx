import { Text, View, StyleSheet } from "react-native";

const History = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.History}>History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  History: {
    color: "#ffffff",
    fontSize: 50,
    borderWidth: 3,
    borderColor: "#f01518",
    width: "100%",
    textAlign: "center",
  },
  Container: {
    flex: 1,
    marginTop: 40,
    borderWidth: 3,
    borderColor: "#ffffff",
    alignItems: "center",
  },
});

export default History;
