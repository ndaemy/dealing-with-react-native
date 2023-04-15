import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { SearchContext } from '../contexts/SearchContext';
import { LogContext } from '../contexts/LogContext';
import { FeedList } from '../components/FeedList';
import { EmptySearchResult } from '../components/EmptySearchResult';

export const SearchScreen = () => {
  const { keyword } = useContext(SearchContext);
  const { logs } = useContext(LogContext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword))
        );

  if (keyword === '') {
    return <EmptySearchResult type='EMPTY_KEYWORD' />;
  }

  if (!filtered.length) {
    return <EmptySearchResult type='NOT_FOUND' />;
  }

  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
