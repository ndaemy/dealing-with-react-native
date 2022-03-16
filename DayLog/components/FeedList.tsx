import React from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import { Log } from '../contexts/LogContext';
import FeedListItem from './FeedListItem';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

type FeedListProps = {
  logs: Log[];
  onScrolledToBottom?: (isBottom: boolean) => void;
};

const FeedList: React.FC<FeedListProps> = ({ logs, onScrolledToBottom }) => {
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!onScrolledToBottom) {
      return;
    }

    const { contentSize, layoutMeasurement, contentOffset } = e.nativeEvent;
    if (contentSize.height < layoutMeasurement.height) {
      return;
    }

    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (distanceFromBottom < 72) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };

  return (
    <FlatList
      data={logs}
      renderItem={({ item }) => <FeedListItem log={item} />}
      style={styles.block}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
    />
  );
};

export default FeedList;
