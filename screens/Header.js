import react from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>My ToDos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    padding: 30,
    fontSize: 40,
    textAlign: "center",
    color: "white",
  },
});
