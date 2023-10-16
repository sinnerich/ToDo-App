import react from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
export default function AddToDo({ submitHandler }) {
  const [text, setText] = useState();
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="new todo"
        style={styles.textinput}
        onChangeText={changeHandler}
      ></TextInput>
      <Button
        title="Add ToDo"
        color="coral"
        onPress={() => submitHandler(text)}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    marginTop: 20,
  },
});
