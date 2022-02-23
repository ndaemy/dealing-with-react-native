import React from "react";
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Message: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Main"> &
  BottomTabScreenProps<MainTabParamList, "Home">;

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
        tabBarActiveTintColor: "#fb8c00",
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "홈",
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "검색",
          tabBarIcon: ({ color, size }) => <Icon name="search" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: "알림",
          tabBarIcon: ({ color, size }) => <Icon name="notifications" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: "메시지",
          tabBarIcon: ({ color, size }) => <Icon name="message" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
