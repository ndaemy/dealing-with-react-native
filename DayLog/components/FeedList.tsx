import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
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
};

const FeedList: React.FC<FeedListProps> = ({ logs }) => {
  return (
    <FlatList
      data={logs}
      renderItem={({ item }) => <FeedListItem log={item} />}
      style={styles.block}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default FeedList;
