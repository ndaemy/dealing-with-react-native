import React, { createContext, useState } from 'react';

const SearchContext = createContext<{
  keyword: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
}>({
  keyword: '',
  onChangeText: () => {},
});

export const SearchContextProvider: React.FC = ({ children }) => {
  const [keyword, setKeyword] = useState<string>('');

  return (
    <SearchContext.Provider value={{ keyword, onChangeText: setKeyword }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
