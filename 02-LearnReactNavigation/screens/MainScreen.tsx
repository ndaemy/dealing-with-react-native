import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { HomeScreen } from './HomeScreen';
import { SearchScreen } from './SearchScreen';
import { NotificationScreen } from './NotificationScreen';
import { MessageScreen } from './MessageScreen';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { StackParamList } from '../App';

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Message: undefined;
};

const Tab = createMaterialBottomTabNavigator<BottomTabParamList>();

type MainScreenProps = NativeStackScreenProps<StackParamList, 'Main'>;

export type MainScreenNavigationProp = MainScreenProps['navigation'];

export const MainScreen = ({}: MainScreenProps) => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color }) => (
            <Icon name='home' color={color} size={24} />
          ),
          tabBarColor: 'black',
          tabBarBadge: 'new',
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({ color }) => (
            <Icon name='search' color={color} size={24} />
          ),
          tabBarColor: 'gray',
        }}
      />
      <Tab.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({ color }) => (
            <Icon name='notifications' color={color} size={24} />
          ),
          tabBarColor: 'green',
          tabBarBadge: 30,
        }}
      />
      <Tab.Screen
        name='Message'
        component={MessageScreen}
        options={{
          tabBarLabel: '메시지',
          tabBarIcon: ({ color }) => (
            <Icon name='message' color={color} size={24} />
          ),
          tabBarColor: 'blue',
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  );
};
