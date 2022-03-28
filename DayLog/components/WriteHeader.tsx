import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { WriteScreenNavigationProp } from '../screens/WriteScreen';
import TransparentCircleButton from './TransparentCircleButton';

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

type WriteHeaderProps = {
  onSave: () => void;
  onAskRemove: () => void;
  isEditing: boolean;
};

const WriteHeader: React.FC<WriteHeaderProps> = ({
  onSave,
  onAskRemove,
  isEditing,
}) => {
  const navigation = useNavigation<WriteScreenNavigationProp>();

  const handleGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.block}>
      <TransparentCircleButton
        name="arrow-back"
        onPress={handleGoBack}
        color="#424242"
      />
      <View style={styles.buttons}>
        {isEditing && (
          <TransparentCircleButton
            name="delete-forever"
            color="#ef5350"
            hasMarginRight
            onPress={onAskRemove}
          />
        )}
        <TransparentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </View>
    </View>
  );
};

export default WriteHeader;
