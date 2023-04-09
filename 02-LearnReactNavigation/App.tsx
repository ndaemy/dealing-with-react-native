import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  NavigatorScreenParams,
  RouteProp,
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
  const getHeaderTitle = (route: RouteProp<StackParamList, 'Main'>) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    const nameMap: Record<string, string> = {
      Home: '홈',
      Search: '검색',
      Notification: '알림',
      Message: '메시지',
    };
    return nameMap[routeName];
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={MainScreen}
          options={({ route }) => ({
            title: getHeaderTitle(route),
          })}
        />
        <Stack.Screen name='Detail' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
