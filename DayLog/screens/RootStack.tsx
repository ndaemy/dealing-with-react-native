import React from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab, { BottomTabParamList } from './MainTab';
import WriteScreen from './WriteScreen';
import { Log } from '../contexts/LogContext';

export type RootStackParamList = {
  MainTab: NavigatorScreenParams<BottomTabParamList>;
  Write: {
    log?: Log;
  };
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
