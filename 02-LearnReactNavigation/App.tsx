import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeScreen } from './screens/HomeScreen';
import { SettingScreen } from './screens/SettingScreen';

export type RootStackParamList = {
  Home: undefined;
  Setting: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        backBehavior='history'
        screenOptions={{
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: 'white',
          drawerPosition: 'left',
        }}
        drawerContent={({ navigation }) => (
          <SafeAreaView>
            <Text>A Custom Drawer</Text>
            <Button
              title='Close drawer'
              onPress={() => navigation.closeDrawer()}
            />
          </SafeAreaView>
        )}
      >
        <Drawer.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: '홈' }}
        />
        <Drawer.Screen
          name='Setting'
          component={SettingScreen}
          options={{ title: '설정' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
