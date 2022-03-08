import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type Log = {
  id: string;
  title: string;
  body: string;
  date: string;
};

type OnCreate = ({ title, body, date }: Omit<Log, 'id'>) => void;

const LogContext = createContext<{
  logs: Log[];
  onCreate: OnCreate;
}>({
  logs: [],
  onCreate: () => {},
});

export const LogContextProvider: React.FC = ({ children }) => {
  const [logs, setLogs] = useState<Log[]>([]);

  const onCreate: OnCreate = ({ title, body, date }) => {
    const log: Log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{ logs, onCreate }}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
