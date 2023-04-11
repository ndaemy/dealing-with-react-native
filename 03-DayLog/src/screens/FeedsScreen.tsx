import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { FloatingWriteButton } from '../components/FloatingWriteButton';
import { LogContext } from '../contexts/LogContext';

export const FeedsScreen = () => {
  const { logs } = useContext(LogContext);

  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
