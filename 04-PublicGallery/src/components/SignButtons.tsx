import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { CustomButton } from '~/components/CustomButton';
import { RootStackNavigationProps } from '~/navigation/RootStackTypes';

type SignButtonsProps = {
  isSignUp?: boolean;
  onSubmit: () => void;
  loading: boolean;
};

export const SignButtons = ({
  isSignUp,
  onSubmit,
  loading,
}: SignButtonsProps) => {
  const navigation = useNavigation<RootStackNavigationProps<'SignIn'>>();

  const primaryTitle = isSignUp ? '회원가입' : '로그인';
  const secondaryTitle = isSignUp ? '로그인' : '회원가입';

  const onSecondaryButtonPress = () => {
    if (isSignUp) {
      navigation.goBack();
    } else {
      navigation.push('SignIn', { isSignUp: true });
    }
  };

  if (loading) {
    return (
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator size={32} color='#6200ee' />
      </View>
    );
  }

  return (
    <View style={styles.buttons}>
      <CustomButton title={primaryTitle} hasMarginBottom onPress={onSubmit} />
      <CustomButton
        title={secondaryTitle}
        theme='secondary'
        onPress={onSecondaryButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerWrapper: {
    marginTop: 64,
    height: 104,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    marginTop: 64,
  },
});
