import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '~/navigation/types';
import { SignInScreen } from '~/screens/SignInScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SignIn'
        component={SignInScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
