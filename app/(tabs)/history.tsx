import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import * as SecureStore from "expo-secure-store";

const History = () => {
  const [Historydata, setHistoryData] = useState<any>();

  return (
    <View style={styles.Container}>
      <Text style={styles.History}>History</Text>
      {Historydata && (
        <View style={styles.outerCard}>
          {Historydata.map((single_history: any, index: number) => (
            <View style={styles.innerCard} key={index}>
              <Text style={{ color: "#ffffff" }}>{single_history.date}</Text>
              <Text style={{ color: "#ffffff", fontSize: 20 }}>
                {single_history.travel_distance}Km
              </Text>
            </View>
          ))}
        </View>
      )}
      <Pressable style={{ flexDirection: "row", gap: 50, marginTop: 40 }}>
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
        <Text
          style={styles.button}
          onPress={async () => {
            let res = await SecureStore.deleteItemAsync("History");
            setHistoryData([]);
          }}
        >
          Delete Data
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
  innerCard: {
    color: "#ffffff",
    borderWidth: 2,
    borderColor: "#ffffff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  outerCard: {
    color: "#ffffff",
    borderColor: "#ffffff",
    borderWidth: 2,
    width: "100%",
  },
});

export default History;
