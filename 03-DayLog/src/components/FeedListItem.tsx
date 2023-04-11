import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Pressable, StyleSheet, Text } from 'react-native';

import { Log } from '../contexts/LogContext';

const formatDate = (date: string) => {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60) {
    return '방금 전';
  }
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }
  return format(d, 'PPP EEE p', { locale: ko });
};

const truncate = (text: string) => {
  const replaced = text.replace(/\n/g, ' ');
  return replaced.length > 100 ? replaced.slice(0, 100) + '...' : replaced;
};

type FeedListItemProps = {
  log: Log;
};

export const FeedListItem = ({ log }: FeedListItemProps) => {
  const { title, body, date } = log;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.block,
        pressed && { backgroundColor: '#efefef' },
      ]}
      android_ripple={{ color: '#ededed' }}
    >
      <Text style={styles.date}>{formatDate(date)}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{truncate(body)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
});
