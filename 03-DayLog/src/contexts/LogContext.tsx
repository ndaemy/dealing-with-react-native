import {
  createContext,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

import { logsStorage } from '../storages/logsStorage';

export type Log = {
  id: string;
  title: string;
  body: string;
  date: string;
};

type LogContextType = {
  logs: Log[];
  onCreate: (log: Omit<Log, 'id'>) => void;
  onModify: (modified: Log) => void;
  onRemove: (id: Log['id']) => void;
};

export const LogContext = createContext<LogContextType>({
  logs: [],
  onCreate: () => {},
  onModify: () => {},
  onRemove: () => {},
});

export const LogContextProvider = ({ children }: PropsWithChildren) => {
  const initialLogRef = useRef<Log[] | null>(null);
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    (async () => {
      const savedLogs = await logsStorage.getLogs();
      if (savedLogs) {
        initialLogRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);

  useEffect(() => {
    if (logs === initialLogRef.current) {
      return;
    }
    logsStorage.setLogs(logs);
  }, [logs]);

  const onCreate = ({ title, body, date }: Omit<Log, 'id'>) => {
    const log: Log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  const onModify = (modified: Log) => {
    setLogs(logs.map(log => (log.id === modified.id ? modified : log)));
  };

  const onRemove = (id: Log['id']) => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };

  return (
    <LogContext.Provider value={{ logs, onCreate, onModify, onRemove }}>
      {children}
    </LogContext.Provider>
  );
};
