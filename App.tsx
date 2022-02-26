import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  RouteProp,
} from "@react-navigation/native";
import MainScreen from "./screens/MainScreen";
import DetailScreen from "./screens/DetailScreen";

export type RootStackParamList = {
  Main: undefined;
  Detail: {
    id: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const getHeaderTitle = (route: RouteProp<RootStackParamList, "Main">) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  const nameMap = {
    Home: "홈",
    Search: "검색",
    Notification: "알림",
    Message: "메시지",
  };

  // @ts-expect-error
  return nameMap[routeName];
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={({ route }) => ({
            title: getHeaderTitle(route),
          })}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
