import { Button, View } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';

import { RootStackParamList } from '../App';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Button
        title='Go to Detail 1'
        onPress={() => navigation.push('Detail', { id: 1 })}
      />
      <Button
        title='Go to Detail 2'
        onPress={() => navigation.push('Detail', { id: 2 })}
      />
      <Button
        title='Go to Detail 3'
        onPress={() => navigation.push('Detail', { id: 3 })}
      />
      <Button
        title='Go to Headerless'
        onPress={() => navigation.push('Headerless')}
      />
    </View>
  );
};
