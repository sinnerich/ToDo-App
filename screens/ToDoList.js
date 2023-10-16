import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
export default function ToDoList({ item }) {
  return (
    <TouchableOpacity>
      <View style={styles.both}>
        <Text style={styles.list}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  list: {
    alignSelf: "center",
    marginLeft: 10,
    fontSize: 20,
    marginRight:10
  },
  both: {
    flexDirection: "row",
    borderColor: "coral",
    borderWidth: 2,
    borderRadius: 5,
    margin: 2,
    marginLeft:10
  },
});
