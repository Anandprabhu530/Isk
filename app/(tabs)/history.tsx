import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import * as SecureStore from "expo-secure-store";

const History = () => {
  const [Historydata, setHistoryData] = useState<any>();

  return (
    <View style={styles.Container}>
      <Text style={styles.History}>History</Text>
      {Historydata && (
        <Text style={{ color: "#ffffff" }}>{Historydata[0].date}</Text>
      )}
      <Pressable>
        <Text
          style={styles.button}
          onPress={async () => {
            let res = await SecureStore.getItemAsync("History").then((res) =>
              JSON.parse(res)
            );
            if (res) {
              console.log(res);
              setHistoryData(res);
            } else {
              alert("Cannot find history");
            }
          }}
        >
          Load Data
        </Text>
      </Pressable>
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
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "#ffffff",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#ffffff",
  },
});

export default History;
