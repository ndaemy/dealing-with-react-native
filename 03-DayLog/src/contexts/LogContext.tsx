import { createContext, PropsWithChildren, useState } from 'react';

type LogContextType = {
  text: string;
  setText: (text: string) => void;
};

export const LogContext = createContext<LogContextType>({
  text: '',
  setText: () => {},
});

export const LogContextProvider = ({ children }: PropsWithChildren) => {
  const [text, setText] = useState('');

  return (
    <LogContext.Provider value={{ text, setText }}>
      {children}
    </LogContext.Provider>
  );
};
