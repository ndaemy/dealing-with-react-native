import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import EmptySearchResult from '../components/EmptySearchResult';
import FeedList from '../components/FeedList';
import LogContext from '../contexts/LogContext';
import SearchContext from '../contexts/SearchContext';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

const SearchScreen: React.FC = () => {
  const { logs } = useContext(LogContext);
  const { keyword } = useContext(SearchContext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        );

  if (keyword === '') {
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }

  if (filtered.length === 0) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }

  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
};

export default SearchScreen;
