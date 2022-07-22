import { Input as NativeBaseInput, IInputProps } from 'native-base';



export function Input({ ...props }: IInputProps) {
  return (
    <NativeBaseInput
      bg='gray.700'
      h={14}
      borderRadius={8}
      borderColor='gray.300'
      borderWidth={0}
      fontSize='md'
      color='white'
      placeholderTextColor='gray.300'
      _focus={{
        borderWidth: 1,
        borderColor: 'green.500',
        bg: 'gray.700',
      }}
      {...props}
    />
  );
}
