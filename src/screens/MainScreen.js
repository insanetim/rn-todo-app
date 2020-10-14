import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = (props) => {
  const { todos, addTodo, removeTodo, openTodo } = props;
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
