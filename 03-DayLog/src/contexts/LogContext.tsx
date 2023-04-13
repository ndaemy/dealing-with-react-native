import { createContext, PropsWithChildren, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_DATA = Array.from({ length: 10 }, (_, i) => ({
  id: uuidv4(),
  title: `Log ${i + 1}`,
  body: `Log ${i + 1} body`,
  date: new Date().toISOString(),
})).reverse();

export type Log = {
  id: string;
  title: string;
  body: string;
  date: string;
};

type LogContextType = {
  logs: Log[];
  onCreate: (log: Omit<Log, 'id'>) => void;
};

export const LogContext = createContext<LogContextType>({
  logs: [],
  onCreate: () => {},
});

export const LogContextProvider = ({ children }: PropsWithChildren) => {
  const [logs, setLogs] = useState<Log[]>(INITIAL_DATA);

  const onCreate = ({ title, body, date }: Omit<Log, 'id'>) => {
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
