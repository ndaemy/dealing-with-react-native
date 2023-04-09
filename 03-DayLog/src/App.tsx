import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';

import { LogContextProvider } from './contexts/LogContext';
import { RootStack } from './screens';

const App = () => {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  );
};

registerRootComponent(App);
