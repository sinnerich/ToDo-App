import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Header from "./Header";
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";
import ModalFunction from "./Modal";

export default function MainScreen({ route }) {
  console.log(route);

  const [todos, setTodos] = useState([
    { title: "do a backflip", key: "1" },
    { title: "swim", key: "2" },
    { title: "run", key: "3" },
    { title: "pingpong", key: "4" },
  ]);
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const pressHandler = (key, action) => {
    if (action == "done") {
      const doneTodo = todos.find((todo) => todo.key == key);
      setDoneTodos((prevDoneTodos) => [...prevDoneTodos, doneTodo]);
    } else {
      const deletedTodo = todos.find((todo) => todo.key === key);
      setDeletedTodos((prevDeletedTodos) => [...prevDeletedTodos, deletedTodo]);
    }

    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => [
      { title: text, key: Math.random().toString() },
      ...prevTodos,
    ]);
  };

  return (
    <View>
      <Text>Welcome {route.params.user.email}</Text>
      <Header />
      <AddToDo submitHandler={submitHandler} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            <ModalFunction
              item={item}
              pressHandler={pressHandler}
              deletedTodos={deletedTodos}
              doneTodos={doneTodos}
            />
            <ToDoList item={item} pressHandler={pressHandler} />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    flex: 1,
  },
});
