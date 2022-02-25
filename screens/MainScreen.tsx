import React from "react";
import { Button, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationProp,
} from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Message: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Main"> &
  MaterialTopTabNavigationProp<MainTabParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Detail 1 열기" onPress={() => navigation.push("Detail", { id: 1 })} />
    </View>
  );
};

const SearchScreen: React.FC = () => {
  return <Text>Search</Text>;
};

const NotificationScreen: React.FC = () => {
  return <Text>Notification</Text>;
};

const MessageScreen: React.FC = () => {
  return <Text>Message</Text>;
};

const MainScreen: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "#009688",
        },
        tabBarActiveTintColor: "#009688",
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "홈",
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "검색",
          tabBarIcon: ({ color }) => <Icon name="search" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "알림",
          tabBarIcon: ({ color }) => <Icon name="notifications" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: "메시지",
          tabBarIcon: ({ color }) => <Icon name="message" color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
