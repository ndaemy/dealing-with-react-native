import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { UserContextProvider } from '~/contexts/UserContext';
import { RootStack } from '~/screens/RootStack';

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootStack />
        <StatusBar style='auto' />
      </NavigationContainer>
    </UserContextProvider>
  );
};

registerRootComponent(App);
