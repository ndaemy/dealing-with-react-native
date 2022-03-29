import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogContextProvider } from './contexts/LogContext';
import { SearchContextProvider } from './contexts/SearchContext';
import RootStack from './screens/RootStack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
};

export default App;
