import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

const FeedsScreen: React.FC = () => {
  const { logs } = useContext(LogContext);

  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
};

export default FeedsScreen;
