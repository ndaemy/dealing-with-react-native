import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { DateHead } from './src/components/DateHead';
import { AddTodo } from './src/components/AddTodo';
import { Empty } from './src/components/Empty';

const App = () => {
  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHead date={today} />
        <Empty />
        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default App;
