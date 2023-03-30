import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type DateHeadProps = {
  date: Date;
};

export const DateHead: FC<DateHeadProps> = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const { top } = useSafeAreaInsets();

  const formattedDate = `${year}년 ${month}월 ${day}일`;

  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <StatusBar backgroundColor='#26a69a' />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: '#fff',
  },
});
