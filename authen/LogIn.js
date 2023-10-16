import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { login } from "../firebase";
export default function LogInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState("");

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const passwordChange = (value) => {
    setPassword(value);
  };
  const loginFct = async (email, password) => {
    const user = await login(email, password);
    //s=>t
    if (user.accessToken) {
      navigation.navigate("Drawer", { user: user });
    }
  };
  return (
    <View>
      <Text style={styles.header}>LogIn</Text>
      <View>
        <TextInput
          placeholder="email"
          style={styles.boxes}
          onChangeText={handleEmailChange}
        ></TextInput>
        <TextInput
          placeholder="password"
          style={styles.boxes}
          secureTextEntry={true}
          onChangeText={passwordChange}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.buttonLayout}
        onPress={() => loginFct(email, password)}
      >
        <Text style={styles.textLayout}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.buttonLayout}>
        <Text
          style={styles.textLayout}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    marginTop: 50,
    marginBottom: 5,
    backgroundColor: "coral",
    textAlign: "center",
    color: "white",
  },
  boxes: {
    borderWidth: 2,
    borderColor: "coral",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 25,
    paddingLeft: 10,
    fontSize: 20,
  },
  buttonLayout: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "coral",
    backgroundColor: "coral",
    borderRadius: 10,
    shadowColor: "#ff0000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  textLayout: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
