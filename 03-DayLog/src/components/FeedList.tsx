import { FlatList, StyleSheet, View } from 'react-native';

import { Log } from '../contexts/LogContext';
import { FeedListItem } from './FeedListItem';

type FeedListProps = {
  logs: Log[];
};

export const FeedList = ({ logs }: FeedListProps) => {
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({ item }) => <FeedListItem log={item} />}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

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
