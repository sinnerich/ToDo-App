import React from "react";
import { View, Text, FlatList } from "react-native";

export default function DoneTodos({ route }) {
  const doneTodos = route?.params?.doneTodos ? route?.params?.doneTodos : [];
  return (
    <View>
      <Text>Done Todos</Text>
      <FlatList
        data={doneTodos}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.key}
      ></FlatList>
    </View>
  );
}
