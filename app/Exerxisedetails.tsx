// import { View, Text } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useLocalSearchParams } from "expo-router";

// const Exercisedetails = () => {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const exercise_name = useLocalSearchParams();

//   useEffect(() => {
//     if (!toggle) {
//       const res = async () => {
//         const exercise_data = await JSON.parse(exercise_name.exercise_name);
//         setData(exercise_data);
//         console.log(exercise_data.name);
//       };
//       res();
//       setToggle(true);
//     }
//   }, [exercise_name]);

//   return (
//     <View
//       style={{
//         borderWidth: 2,
//         borderColor: "#ffffff",
//         flex: 1,
//       }}
//     >
//       <Text
//         style={{
//           color: "#ffffff",
//           flex: 0.4,
//           borderWidth: 2,
//           borderColor: "#ffffff",
//         }}
//       >
//         Video Session
//       </Text>
//       <Text
//         style={{
//           color: "#ffffff",
//           borderWidth: 2,
//           paddingHorizontal: 20,
//           paddingVertical: 15,
//           borderTopLeftRadius: 50,
//           borderTopRightRadius: 50,
//           borderColor: "#ffffff",
//           fontSize: 30,
//           textAlign: "center",
//         }}
//       >
//         {data && data.name}
//       </Text>
//       <View>
//         <Text></Text>
//         <Text>Start Session</Text>
//       </View>
//     </View>
//   );
// };

// export default Exercisedetails;

import { Button, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function Exercisedetails() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: "violet",
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}
