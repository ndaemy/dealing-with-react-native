import { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { FeedList } from '../components/FeedList';
import { FloatingWriteButton } from '../components/FloatingWriteButton';
import { LogContext } from '../contexts/LogContext';

export const FeedsScreen = () => {
  const { logs } = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = (isBottom: boolean) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
