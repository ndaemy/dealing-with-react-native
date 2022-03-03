import React, { createContext, useState } from 'react';

const LogContext = createContext<{
  text?: string;
  setText?: React.Dispatch<React.SetStateAction<string>>;
}>({});

export const LogContextProvider: React.FC = ({ children }) => {
  const [text, setText] = useState('');

  return (
    <LogContext.Provider value={{ text, setText }}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
