import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { forwardRef, ForwardRefRenderFunction } from 'react';

type BorderedInputProps = TextInputProps & {
  hasMarginBottom?: boolean;
};

const BorderedInputComponent: ForwardRefRenderFunction<
  TextInput,
  BorderedInputProps
> = ({ hasMarginBottom, ...rest }, ref) => {
  return (
    <TextInput
      style={[styles.input, hasMarginBottom && styles.marginBottom]}
      ref={ref}
      {...rest}
    />
  );
};

export const BorderedInput = forwardRef<TextInput, BorderedInputProps>(
  BorderedInputComponent
);

const styles = StyleSheet.create({
  input: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: 'white',
  },
  marginBottom: {
    marginBottom: 16,
  },
});
