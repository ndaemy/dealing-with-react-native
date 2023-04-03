import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { DateHead } from './src/components/DateHead';
import { AddTodo } from './src/components/AddTodo';
import { Empty } from './src/components/Empty';
import { useState } from 'react';
import { TodoList } from './src/components/TodoList';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const App = () => {
  const today = new Date();

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '작업환경 설정', done: true },
    { id: 2, text: '리액트 네이티브 기초 공부', done: false },
    { id: 3, text: '투두리스트 만들어보기', done: false },
  ]);

  const onInsert = (text: string) => {
    const nextId = todos.length ? todos[todos.length - 1].id + 1 : 1;

    const newTodo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const onToggle = (id: number) => {
    const nextTodos = todos.map(todo =>
      todo.id === id
        ? {
            ...todo,
            done: !todo.done,
          }
        : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = (id: number) => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding' })}
          style={styles.avoid}
        >
          <DateHead date={today} />
          {!todos.length ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});

export default App;
