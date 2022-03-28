import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type Log = {
  id: string;
  title: string;
  body: string;
  date: string;
};

type OnCreate = ({ title, body, date }: Omit<Log, 'id'>) => void;

type OnModify = ({ id, title, body, date }: Log) => void;

type OnRemove = ({ id }: Pick<Log, 'id'>) => void;

const LogContext = createContext<{
  logs: Log[];
  onCreate: OnCreate;
  onModify: OnModify;
  onRemove: OnRemove;
}>({
  logs: [],
  onCreate: () => {},
  onModify: () => {},
  onRemove: () => {},
});

export const LogContextProvider: React.FC = ({ children }) => {
  const [logs, setLogs] = useState<Log[]>(
    Array.from({ length: 3 }).map((_, index) => ({
      id: uuidv4(),
      title: `Log ${index}`,
      body: `Log ${index}`,
      date: new Date().toISOString(),
    })),
  );

  const onCreate: OnCreate = ({ title, body, date }) => {
    const log: Log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  const onModify: OnModify = modified => {
    // logs 배열을 순회해 id가 일치하면 log를 교체하고 그렇지 않으면 유지
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLogs);
  };

  const onRemove: OnRemove = ({ id }) => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };

  return (
    <LogContext.Provider value={{ logs, onCreate, onModify, onRemove }}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
