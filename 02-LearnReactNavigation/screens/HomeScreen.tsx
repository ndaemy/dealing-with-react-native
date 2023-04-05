import { Button, Text, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { RootStackParamList } from '../App';

type HomeScreenProps = DrawerScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
      <Button
        title='Open Setting'
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
};
