import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MyProfileStackParamList } from '~/navigation/MyProfileStackTypes';
import { MyProfileScreen } from '~/screens/MyProfileScreen';

const Stack = createNativeStackNavigator<MyProfileStackParamList>();

export const MyProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MyProfile' component={MyProfileScreen} />
    </Stack.Navigator>
  );
};
