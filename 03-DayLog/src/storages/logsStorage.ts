import AsyncStorage from '@react-native-async-storage/async-storage';

import { Log } from '../contexts/LogContext';

const key = 'logs';

export const logsStorage = {
  getLogs: async () => {
    try {
      const logs = await AsyncStorage.getItem(key);
      return logs ? JSON.parse(logs) : [];
    } catch (e) {
      console.log(e);
      return [];
    }
  },
  setLogs: async (logs: Log[]) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(logs));
    } catch (e) {
      throw new Error('Failed to save logs');
    }
  },
};
