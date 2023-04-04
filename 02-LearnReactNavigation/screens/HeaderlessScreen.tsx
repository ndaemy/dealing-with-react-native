import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';

import { RootStackParamList } from '../App';

type HeaderlessScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Headerless'
>;

export const HeaderlessScreen = ({ navigation }: HeaderlessScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <Text>HeaderlessScreen</Text>
        <Button title='Back' onPress={() => navigation.pop()} />
      </View>
    </SafeAreaView>
  );
};
