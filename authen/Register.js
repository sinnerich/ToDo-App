import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { register } from "../firebase";
import { useNavigation } from "@react-navigation/native";
const RegisterScreen = () => {
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();
  const navigator = useNavigation();
  const registerFct = async (email, password) => {
    const user = await register(email, password);
    //s=>t
    if (user.accessToken) {
      navigator.navigate("Drawer", { user: user });
    }
  };
  return (
    <View>
      <Text style={styles.header}> Register </Text>

      <View>
        <TextInput
          placeholder="email"
          style={styles.boxes}
          onChangeText={(text) => {
            setEmail(text);
          }}
        ></TextInput>
      </View>
      <View>
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style={styles.boxes}
          onChangeText={(text) => {
            setPassword(text);
          }}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.buttonLayout}
        onPress={() => {
          registerFct(email, password);
        }}
      >
        <Text style={styles.textLayout}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLayout}>
        <Text
          style={styles.textLayout}
          onPress={() => navigator.navigate("Login")}
        >
          I have an account
        </Text>
        
      </TouchableOpacity>
    </View>
  );
};
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
export default RegisterScreen;
