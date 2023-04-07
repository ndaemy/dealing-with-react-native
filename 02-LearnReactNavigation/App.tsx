import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DetailScreen } from './screens/DetailScreen';
import { BottomTabParamList, MainScreen } from './screens/MainScreen';

export type StackParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  Detail: {
    id: number;
  };
};

const Stack = createStackNavigator<StackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name='Detail' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
