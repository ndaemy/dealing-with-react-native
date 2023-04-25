import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useUserContext } from '~/contexts/UserContext';
import { RootStackParamList } from '~/navigation/types';
import { SignInScreen } from '~/screens/SignInScreen';
import { WelcomeScreen } from '~/screens/WelcomeScreen';
import { MainTab } from '~/screens/MainTab';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  const { user } = useUserContext();

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name='MainTab'
          component={MainTab}
          options={{ headerShown: false }}
        />
      ) : (
        <>
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
        </>
      )}
    </Stack.Navigator>
  );
};
