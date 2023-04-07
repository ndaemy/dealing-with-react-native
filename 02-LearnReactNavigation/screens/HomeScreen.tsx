import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MainScreenNavigationProp } from './MainScreen';

export const HomeScreen = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Open Detail 1'
        onPress={() => navigation.navigate('Detail', { id: 1 })}
      />
    </View>
  );
};
