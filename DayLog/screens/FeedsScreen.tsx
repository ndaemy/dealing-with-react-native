import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';
import FeedList from '../components/FeedList';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

const FeedsScreen: React.FC = () => {
  const { logs } = useContext(LogContext);

  return (
    <View style={styles.block}>
      <FeedList logs={logs} />
      <FloatingWriteButton />
    </View>
  );
};

export default FeedsScreen;
