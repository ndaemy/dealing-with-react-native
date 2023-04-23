import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { RootStack } from '~/screens/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
      <StatusBar style='auto' />
    </NavigationContainer>
  );
};

registerRootComponent(App);
