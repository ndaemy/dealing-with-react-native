import React, { useCallback } from "react";
import { Button, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationProp,
} from "@react-navigation/material-bottom-tabs";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();

type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Message: undefined;
};

const OpenDetailButton: React.FC = () => {
  const navigation = useNavigation();

  // @ts-expect-error
  return <Button title="Detail 1 열기" onPress={() => navigation.push("Detail", { id: 1 })} />;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Main"> &
  MaterialBottomTabNavigationProp<MainTabParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  useFocusEffect(
    useCallback(() => {
      console.log("focused");
      return () => {
        console.log("unfocused");
      };
    }, []),
  );

  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
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
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "홈",
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={24} />,
          tabBarColor: "black",
          tabBarBadge: "new",
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "검색",
          tabBarIcon: ({ color }) => <Icon name="search" color={color} size={24} />,
          tabBarColor: "gray",
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "알림",
          tabBarIcon: ({ color }) => <Icon name="notifications" color={color} size={24} />,
          tabBarColor: "green",
          tabBarBadge: 30,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: "메시지",
          tabBarIcon: ({ color }) => <Icon name="message" color={color} size={24} />,
          tabBarColor: "blue",
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
