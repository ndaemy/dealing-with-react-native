import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import 'react-native-get-random-values';

import { LogContextProvider } from './contexts/LogContext';
import { SearchContextProvider } from './contexts/SearchContext';
import { RootStack } from './screens';

const App = () => {
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

registerRootComponent(App);
