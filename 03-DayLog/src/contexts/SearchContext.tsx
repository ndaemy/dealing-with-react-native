import { createContext, PropsWithChildren, useState } from 'react';

type SearchContextType = {
  keyword: string;
  onChangeText: (text: string) => void;
};

export const SearchContext = createContext<SearchContextType>({
  keyword: '',
  onChangeText: () => {},
});

export const SearchContextProvider = ({ children }: PropsWithChildren) => {
  const [keyword, onChangeText] = useState('');

  return (
    <SearchContext.Provider value={{ keyword, onChangeText }}>
      {children}
    </SearchContext.Provider>
  );
};
