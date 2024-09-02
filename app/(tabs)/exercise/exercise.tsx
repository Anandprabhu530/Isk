import useStore from "@/store";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const exercise = () => {
  // const { exercise_list } = useStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <ScrollView style={style.full_screen_view}>
      <Text style={style.exercise_heading}>Exercises</Text>
      {/* {exercise_list.map((exercise_name, index) => (
        <Link
          href={{
            pathname: "/Exerxisedetails",
            params: { exercise_name: JSON.stringify(exercise_name) },
          }}
          style={style.exercise_cards}
          key={index}
        >
          <View
            style={{
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <Text style={style.card_text}>{exercise_name.name}</Text>
            <Text>40 mins</Text>
          </View>
          <ImageBackground
            source={require(`../../../assets/images/aipullup.png`)}
            resizeMode="cover"
            style={{
              flex: 1,
              height: 190,
              width: 230,
            }}
          ></ImageBackground>
        </Link>
      ))} */}
      <Text>Username</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={{
          borderColor: "#ffffff",
          borderWidth: 2,
          color: "#ffffff",
          padding: 2,
        }}
      ></TextInput>
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Passsword"
        style={{
          borderColor: "#ffffff",
          borderWidth: 2,
          color: "#ffffff",
          padding: 2,
        }}
      ></TextInput>
      <Button onPress={() => handleSignIn()} title="Sign in" />

      <Button onPress={() => handleSignUp()} title="Register" />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  full_screen_view: {
    marginTop: 50,
    borderWidth: 2,
    borderColor: "#ffffff",
    flex: 1,
    padding: 10,
  },
  exercise_heading: {
    borderWidth: 2,
    borderColor: "#ffffff",
    fontSize: 40,
    color: "#ffffff",
    textAlign: "center",
  },
  exercise_cards: {
    borderWidth: 2,
    borderColor: "#ffffff",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#e5a6fc",
    borderRadius: 25,
    color: "#000000",
    height: 210,
    flexDirection: "row",
  },
  card_text: {
    fontSize: 30,
    width: 150,
  },
});

export default exercise;
