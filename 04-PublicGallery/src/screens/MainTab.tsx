import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { CameraButton } from '~/components/CameraButton';
import { MainTabParamList } from '~/navigation/MainTabTypes';
import { HomeStack } from '~/screens/HomeStack';
import { MyProfileStack } from '~/screens/MyProfileStack';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTab = () => {
  return (
    <>
      <View style={styles.block}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#6200ee',
          }}
        >
          <Tab.Screen
            name='HomeStack'
            component={HomeStack}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name='home' size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name='MyProfileStack'
            component={MyProfileStack}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name='person' size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
      <CameraButton />
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    zIndex: 0,
  },
});
