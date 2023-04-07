import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

const Tab = createBottomTabNavigator<BottomTabParamList>();

type MainScreenProps = NativeStackScreenProps<StackParamList, 'Main'>;

export type MainScreenNavigationProp = MainScreenProps['navigation'];

export const MainScreen = ({}: MainScreenProps) => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({ color, size }) => (
            <Icon name='search' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          title: '알림',
          tabBarIcon: ({ color, size }) => (
            <Icon name='notifications' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Message'
        component={MessageScreen}
        options={{
          title: '메시지',
          tabBarIcon: ({ color, size }) => (
            <Icon name='message' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
