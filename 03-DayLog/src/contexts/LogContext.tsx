import { createContext, PropsWithChildren, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_DATA = [
  {
    id: uuidv4(),
    title: 'Log 03',
    body: 'This is the third log',
    date: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    title: 'Log 02',
    body: 'This is the second log',
    date: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
  },
  {
    id: uuidv4(),
    title: 'Log 01',
    body: 'This is the first log',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
  },
];

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
