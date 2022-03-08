import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

type TransparentCircleButtonProps = {
  name: string;
  color?: number | ColorValue;
  hasMarginRight?: boolean;
  onPress?: (event: GestureResponderEvent) => void | null;
};

const TransparentCircleButton: React.FC<TransparentCircleButtonProps> = ({
  name,
  color,
  hasMarginRight,
  onPress,
}) => {
  return (
    <View
      style={[styles.iconButtonWrapper, hasMarginRight && styles.marginRight]}>
      <Pressable
        style={({ pressed }) => [
          styles.iconButton,
          Platform.OS === 'ios' && pressed && { backgroundColor: '#efefef' },
        ]}
        onPress={onPress}
        android_ripple={{ color: '#ededed' }}>
        <Icon name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
};

export default TransparentCircleButton;
