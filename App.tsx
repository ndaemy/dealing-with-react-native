import React from "react";
import { createDrawerNavigator, DrawerScreenProps } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

type HomeScreenProps = DrawerScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Open Settings" onPress={() => navigation.navigate("Settings")} />
    </View>
  );
};

type SettingsScreenProps = DrawerScreenProps<RootStackParamList, "Settings">;

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Settings</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="history"
        drawerContent={({ navigation }) => (
          <SafeAreaView>
            <Text>A Custom Drawer</Text>
            <Button title="Close Drawer" onPress={() => navigation.closeDrawer()} />
          </SafeAreaView>
        )}
        screenOptions={{
          drawerActiveBackgroundColor: "#fb8c00",
          drawerActiveTintColor: "white",
          drawerPosition: "left",
          headerShown: false,
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "홈", headerLeft: () => <Text>Left</Text> }}
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: "설정" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
