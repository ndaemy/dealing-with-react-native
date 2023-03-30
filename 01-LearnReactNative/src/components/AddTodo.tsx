import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

export const AddTodo: FC = () => {
  return <View style={styles.block} />;
};

const styles = StyleSheet.create({
  block: {
    height: 64,
    backgroundColor: 'red',
  },
});
