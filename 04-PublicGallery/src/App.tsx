import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { RootStack } from '~/screens/RootStack';
import { Text } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
      <StatusBar style='auto' />
      <Text>Hi</Text>
    </NavigationContainer>
  );
};

registerRootComponent(App);
