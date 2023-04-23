import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress?: () => void;
  hasMarginBottom?: boolean;
  theme?: 'primary' | 'secondary';
};

export const CustomButton = ({
  title,
  onPress,
  hasMarginBottom,
  theme = 'primary',
}: CustomButtonProps) => {
  const isPrimary = theme === 'primary';

  return (
    <View style={[styles.block, hasMarginBottom && styles.marginBottom]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.wrapper,
          isPrimary && styles.primaryWrapper,
          pressed && Platform.select({ ios: { opacity: 0.5 } }),
        ]}
        android_ripple={{ color: '#ffffff' }}
      >
        <Text
          style={[
            styles.text,
            isPrimary ? styles.primaryText : styles.secondaryText,
          ]}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  wrapper: {
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryWrapper: {
    backgroundColor: '#6200ee',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: '#6200ee',
  },
  marginBottom: {
    marginBottom: 8,
  },
});
