import { useState } from "react";
import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import * as SecureStore from "expo-secure-store";

const History = () => {
  const [Historydata, setHistoryData] = useState<any>();

  return (
    <ScrollView style={styles.Container}>
      <Text style={styles.History}>History</Text>
      <Pressable
        style={{
          flexDirection: "row",
          gap: 50,
          marginTop: 40,
          justifyContent: "center",
        }}
      >
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
          Load History
        </Text>
        <Text
          style={styles.button}
          onPress={async () => {
            let res = await SecureStore.deleteItemAsync("History");
            setHistoryData([]);
          }}
        >
          Delete History
        </Text>
      </Pressable>
      {Historydata && (
        <View style={styles.outerCard}>
          {Historydata.map((single_history: any, index: number) => (
            <View style={styles.innerCard} key={index}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 20,
                    paddingHorizontal: 10,
                  }}
                >
                  {single_history.travel_distance}
                  <Text style={{ fontSize: 10, paddingLeft: 2 }}> Km</Text>
                </Text>
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 20,
                    paddingLeft: 30,
                  }}
                >
                  {Math.floor(single_history.time_taken / (1000 * 60))}
                  <Text style={{ fontSize: 10, color: "#ffffff" }}> mins</Text>
                </Text>
              </View>
              <Text style={{ color: "#ffffff" }}>{single_history.date}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
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
    width: "100%",
    paddingTop: 20,
  },
});

export default History;
