import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';

import { RootStackParamList } from '../App';

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export const DetailScreen = ({ navigation, route }: DetailScreenProps) => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id: {route.params.id}</Text>
      <View style={styles.buttons}>
        <Button
          title='Next'
          onPress={() => navigation.push('Detail', { id: route.params.id + 1 })}
        />
        <Button title='Back' onPress={() => navigation.pop()} />
        <Button title='Home' onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});
