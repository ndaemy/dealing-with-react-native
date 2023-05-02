import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';

import { useUserContext } from '~/contexts/UserContext';
import { RootStackParamList } from '~/navigation/RootStackTypes';
import { SignInScreen } from '~/screens/SignInScreen';
import { WelcomeScreen } from '~/screens/WelcomeScreen';
import { MainTab } from '~/screens/MainTab';
import { subscribeAuth } from '~/lib/firebaseAuth';
import { getUser } from '~/lib/users';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  const { user, setUser } = useUserContext();

  useEffect(() => {
    return subscribeAuth(async currentUser => {
      console.log(currentUser);
      if (!currentUser) {
        return;
      }

      const profile = await getUser(currentUser.uid);
      console.log(profile);
      if (!profile) {
        return;
      }

      setUser({ id: currentUser.uid, ...profile });
    });
  }, [setUser]);

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
