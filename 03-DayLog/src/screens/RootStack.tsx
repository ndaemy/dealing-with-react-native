import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainTab } from './MainTab';
import { WriteScreen } from './WriteScreen';

type RootStackParamList = {
  MainTab: undefined;
  Write: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MainTab'
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Write' component={WriteScreen} />
    </Stack.Navigator>
  );
};