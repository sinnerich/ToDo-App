import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function DeletedTodos({ route }) {
  const deletedTodos = route?.params?.deletedTodos
    ? route?.params?.deletedTodos
    : [];
  

  return (
    <View>
      <Text style={styles.a}>Deleted Todos:</Text>
      <FlatList
        data={deletedTodos}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  a: {
    fontSize: 40,
    marginTop: 20,
  },
});
