import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { FeedList } from '../components/FeedList';
import { FloatingWriteButton } from '../components/FloatingWriteButton';
import { LogContext } from '../contexts/LogContext';

export const FeedsScreen = () => {
  const { logs } = useContext(LogContext);

  return (
    <View style={styles.block}>
      <FeedList logs={logs} />
      <FloatingWriteButton />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
