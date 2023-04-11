import { Platform, Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IconProps } from 'react-native-vector-icons/Icon';

type TransparentCircleButtonProps = Pick<IconProps, 'name' | 'color'> & {
  hasMarginRight?: boolean;
  onPress?: () => void;
};

export const TransparentCircleButton = ({
  name,
  color,
  hasMarginRight,
  onPress,
}: TransparentCircleButtonProps) => {
  return (
    <View
      style={[styles.iconButtonWrapper, hasMarginRight && styles.marginRight]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.iconButton,
          Platform.select({ ios: pressed && { backgroundColor: '#efefef' } }),
        ]}
        onPress={onPress}
        android_ripple={{ color: '#ededed' }}
      >
        <Icon name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  marginRight: {
    marginRight: 8,
  },
});
