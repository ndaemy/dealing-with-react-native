import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Todo } from "../App";

import TodoItem from "./TodoItem";

const styles = StyleSheet.create({
  separator: {
    backgroundColor: "#e0e0e0",
    height: 1,
  },
  list: {
    flex: 1,
  },
});

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  const separator = () => <View style={styles.separator} />;

  return (
    <FlatList
      ItemSeparatorComponent={separator}
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TodoList;
