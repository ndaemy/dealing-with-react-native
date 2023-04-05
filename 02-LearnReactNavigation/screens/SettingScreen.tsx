import { Button, Text, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { RootStackParamList } from '../App';

type SettingScreenProps = DrawerScreenProps<RootStackParamList, 'Setting'>;

export const SettingScreen = ({ navigation }: SettingScreenProps) => {
  return (
    <View>
      <Text>Setting</Text>
      <Button title='Go Back' onPress={() => navigation.goBack()} />
    </View>
  );
};
