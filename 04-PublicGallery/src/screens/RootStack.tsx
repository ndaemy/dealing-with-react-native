import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '~/navigation/types';
import { SignInScreen } from '~/screens/SignInScreen';
import { WelcomeScreen } from '~/screens/WelcomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SignIn'
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
