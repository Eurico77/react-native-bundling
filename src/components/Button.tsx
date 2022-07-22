import { IButtonProps, Button as NativeButton, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...props }: Props) {
  return (
    <NativeButton
      mt={4}
      h={14}
      w='full'
      bg='green.700'
      fontSize='md'
      color='coolGray.700'
      rounded='sm'
      _pressed={{
        bg: 'green.500',
      }}
      {...props}
    >
      <Heading color='white' fontSize='md'>
        {title}
      </Heading>
    </NativeButton>
  );
}
