import React, { useContext, useState } from 'react';
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

export default FeedsScreen;
