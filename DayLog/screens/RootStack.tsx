import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab, { BottomTabParamList } from './MainTab';
import WriteScreen from './WriteScreen';
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  MainTab: NavigatorScreenParams<BottomTabParamList>;
  Write: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
