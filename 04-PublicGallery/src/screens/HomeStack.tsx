import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackParamList } from '~/navigation/HomeStackTypes';
import { FeedScreen } from '~/screens/FeedScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Feed' component={FeedScreen} />
    </Stack.Navigator>
  );
};
