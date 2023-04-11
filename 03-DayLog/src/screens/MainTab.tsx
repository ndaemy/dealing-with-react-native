import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { CalendarScreen } from './CalendarScreen';
import { FeedsScreen } from './FeedsScreen';
import { SearchScreen } from './SearchScreen';

export type MainTabParamList = {
  Feeds: undefined;
  Calendar: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#009688',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='Feeds'
        component={FeedsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='view-stream' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Calendar'
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='event' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='search' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
