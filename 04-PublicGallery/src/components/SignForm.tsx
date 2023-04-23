import { useRef } from 'react';
import { TextInput } from 'react-native';

import { BorderedInput } from '~/components/BorderedInput';

export type SignFormType = {
  email: string;
  password: string;
  passwordConfirm?: string;
};

type SignFormProps = {
  isSignUp?: boolean;
  onSubmit: () => void;
  form: SignFormType;
  createChangeHandler: (key: keyof SignFormType) => (value: string) => void;
};

export const SignForm = ({
  isSignUp,
  onSubmit,
  form,
  createChangeHandler,
}: SignFormProps) => {
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  return (
    <>
      <BorderedInput
        hasMarginBottom
        placeholder='이메일'
        value={form.email}
        onChangeText={createChangeHandler('email')}
        autoCapitalize='none'
        autoCorrect={false}
        autoComplete='email'
        keyboardType='email-address'
        returnKeyType='next'
        onSubmitEditing={() => {
          passwordRef.current?.focus();
        }}
      />
      <BorderedInput
        placeholder='비밀번호'
        secureTextEntry
        hasMarginBottom={isSignUp}
        value={form.password}
        onChangeText={createChangeHandler('password')}
        ref={passwordRef}
        returnKeyType={isSignUp ? 'next' : 'done'}
        onSubmitEditing={() => {
          if (isSignUp) {
            confirmPasswordRef.current?.focus();
          } else {
            onSubmit();
          }
        }}
      />
      {isSignUp && (
        <BorderedInput
          placeholder='비밀번호 확인'
          secureTextEntry
          value={form.passwordConfirm}
          onChangeText={createChangeHandler('passwordConfirm')}
          ref={confirmPasswordRef}
          returnKeyType='done'
          onSubmitEditing={onSubmit}
        />
      )}
    </>
  );
};
