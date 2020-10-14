import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    { id: "1", title: "Посрать" },
    { id: "2", title: "Подтереть жепу" },
  ]);

  const addTodo = (title) => {
    setTodos((prev) => [...prev, { id: Date.now().toString(), title }]);
  };

  const removeTodo = (id) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = <TodoScreen todo={selectedTodo} goBack={() => setTodoId(null)} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Navbar title="Todo App!" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    flex: 1,
  },
});
