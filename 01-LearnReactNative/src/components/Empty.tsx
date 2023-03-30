import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const Empty: FC = () => {
  return (
    <View style={styles.block}>
      <Image
        source={require('../../assets/images/young_and_happy.png')}
        style={styles.image}
        resizeMode='contain'
      />
      <Text style={styles.description}>야호! 할 일이 없습니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});
