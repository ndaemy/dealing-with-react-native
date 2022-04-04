import React, { Reducer, useReducer } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { WriteScreenNavigationProp } from '../screens/WriteScreen';
import TransparentCircleButton from './TransparentCircleButton';
import { ko } from 'date-fns/locale';
import { format } from 'date-fns';
import DateTimePicker from 'react-native-modal-datetime-picker';

type State = {
  mode: 'date' | 'time' | 'datetime';
  visible: boolean;
};

type Action = {
  type: 'open' | 'close';
  mode?: 'date' | 'time' | 'datetime';
};

const initialState: State = { mode: 'date', visible: false };

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'open':
      return {
        mode: action.mode!,
        visible: true,
      };
    case 'close':
      return {
        ...state,
        visible: false,
      };
    default:
      throw new Error('Unhandled action type');
  }
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
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  separator: {
    width: 8,
  },
});

type WriteHeaderProps = {
  onSave: () => void;
  onAskRemove: () => void;
  isEditing: boolean;
  date: Date;
  onChangeDate: React.Dispatch<React.SetStateAction<Date>>;
};

const WriteHeader: React.FC<WriteHeaderProps> = ({
  onSave,
  onAskRemove,
  isEditing,
  date,
  onChangeDate,
}) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState,
  );

  const navigation = useNavigation<WriteScreenNavigationProp>();

  const onGoBack = () => {
    navigation.pop();
  };

  const open = (mode: 'date' | 'time') => dispatch({ type: 'open', mode });

  const close = () => dispatch({ type: 'close' });

  const onConfirm = (selectedDate: Date) => {
    close();
    onChangeDate(selectedDate);
  };

  return (
    <View style={styles.block}>
      <TransparentCircleButton
        name="arrow-back"
        onPress={onGoBack}
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
      <View style={styles.center}>
        <Pressable onPress={() => open('date')}>
          <Text>
            {format(new Date(date), 'PPP', {
              locale: ko,
            })}
          </Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPress={() => open('time')}>
          <Text>{format(new Date(date), 'p', { locale: ko })}</Text>
        </Pressable>
      </View>
      <DateTimePicker
        isVisible={state.visible}
        mode={state.mode}
        onConfirm={onConfirm}
        onCancel={close}
        date={date}
      />
    </View>
  );
};

export default WriteHeader;
