import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';

import { RootStack } from './screens';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

registerRootComponent(App);
