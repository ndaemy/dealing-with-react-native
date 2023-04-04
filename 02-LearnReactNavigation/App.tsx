import { NavigationContainer } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { HomeScreen } from './screens/HomeScreen';
import { DetailScreen } from './screens/DetailScreen';
import { HeaderlessScreen } from './screens/HeaderlessScreen';

export type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: number;
  };
  Headerless: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: '#29b6f6' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name='Detail'
          component={DetailScreen}
          options={({ navigation, route }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.pop()}>
                <Text>Back</Text>
              </TouchableOpacity>
            ),
            headerCenter: () => (
              <View>
                <Text>{`Detail - ${route.params.id}`}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name='Headerless'
          component={HeaderlessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
