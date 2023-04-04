import AsyncStorage from '@react-native-async-storage/async-storage';
import { Todo } from '../../App';

const TODO_STORAGE_KEY = 'todos';

export const todosStorage = {
  async get(): Promise<Todo[]> {
    try {
      const todos = await AsyncStorage.getItem(TODO_STORAGE_KEY);
      return todos ? JSON.parse(todos) : [];
    } catch (e) {
      console.error(e);
      throw new Error('Failed to get todos from storage');
    }
  },
  async set(todos: Todo[]) {
    try {
      await AsyncStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      console.error(e);
      throw new Error('Failed to set todos to storage');
    }
  },
};
