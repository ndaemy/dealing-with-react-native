import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.full}>
      <Counter
        count={count}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </SafeAreaView>
  );
};

export default App;
