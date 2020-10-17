import React from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = (props) => {
  const { todos, addTodo, removeTodo, openTodo } = props;
  let content = (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          source={require("../../assets/no-items.png")}
          style={styles.img}
        />
      </View>
    );
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
