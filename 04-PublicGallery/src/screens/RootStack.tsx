import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return <Text>Home</Text>;
};

export const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  );
};
