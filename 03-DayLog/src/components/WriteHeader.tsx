import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

import { NavigationProp } from '../screens/types';
import { TransparentCircleButton } from './TransparentCircleButton';

type WriteHeaderProps = {
  onSave: () => void;
  onAskRemove: () => void;
  isEditing: boolean;
};

export const WriteHeader = ({
  onSave,
  onAskRemove,
  isEditing,
}: WriteHeaderProps) => {
  const navigation = useNavigation<NavigationProp>();

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransparentCircleButton
          name='arrow-back'
          color='#424242'
          onPress={onGoBack}
        />
      </View>
      <View style={styles.buttons}>
        {isEditing && (
          <TransparentCircleButton
            name='delete-forever'
            color='#ef5350'
            hasMarginRight
            onPress={onAskRemove}
          />
        )}
        <TransparentCircleButton
          name='check'
          color='#009688'
          onPress={onSave}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
});
