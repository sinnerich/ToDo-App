import React, { useState } from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ModalFunction({
  item,
  pressHandler,
  deletedTodos,
  doneTodos,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const pressNavigation = useNavigation();

  const deleteHandler = () => {
    pressHandler(item.key, "deleted");
    //keyu si actiunea neaparat
    setModalVisible(false);
    pressNavigation.navigate("DeletedTodos", {
      deletedTodos: [...deletedTodos, item],
    });
  };

  const doneHandler = () => {
    pressHandler(item.key, "done");
    setModalVisible(false);
    pressNavigation.navigate("DoneTodos", { doneTodos: [...doneTodos, item] });
  };

  return (
    <View>
      <View>
        <MaterialIcons
          name="more"
          size={30}
          onPress={() => setModalVisible(true)}
        />
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={40}
            onPress={() => setModalVisible(false)}
          />
          <Text style={styles.a}>{item.title}</Text>
          <View style={styles.b}>
            <TouchableOpacity style={styles.c} onPress={deleteHandler}>
              <MaterialIcons name="delete" size={200} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.c}>
              <MaterialIcons name="done" size={200} onPress={doneHandler} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  a: {
    padding: 10,
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "coral",
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
    borderStyle: "dashed",
  },
  b: {
    flexDirection: "row",
  },
  c: {
    marginTop: 100,
  },
});
