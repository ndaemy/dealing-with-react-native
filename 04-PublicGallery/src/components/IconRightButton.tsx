import { Platform, Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type IconRightButtonProps = {
  name: string;
  color?: string;
  onPress: () => void;
};

export const IconRightButton = ({
  name,
  color = '#6200ee',
  onPress,
}: IconRightButtonProps) => {
  return (
    <View style={styles.block}>
      <Pressable
        style={({ pressed }) => [
          styles.circle,
          pressed && Platform.select({ ios: { opacity: 0.3 } }),
        ]}
        onPress={onPress}
        android_ripple={{ color: '#eee' }}
      >
        <Icon name={name} color={color} size={24} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginRight: -8,
    borderRadius: 24,
    overflow: 'hidden',
  },
  circle: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
