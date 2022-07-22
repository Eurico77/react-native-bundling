import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key, Eye } from 'phosphor-react-native';
import auth from '@react-native-firebase/auth';

import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useState } from 'react';
import { Alert } from 'react-native';

export function SignIn() {
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Entrar', 'Por favor, preencha todos os campos');
      return;
    }
    setIsLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);

      Alert.alert('Entrar', 'Login realizado com sucesso');
    } catch ({ code }) {
      setIsLoading(false);
      if (code === 'auth/user-not-found') {
        Alert.alert('Entrar', 'E-mail ou senha incorretos');
        setPassword('');
        setEmail('');
      }

      if (code === 'auth/wrong-password') {
        Alert.alert('Entrar', 'Senha incorreta');
        setPassword('');
        setEmail('');
      }

      if (code === 'auth/invalid-email') {
        Alert.alert('Entrar', 'E-mail ou senha incorretos');
        setPassword('');
        setEmail('');
      }
    }
  };

  return (
    <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
      <Logo width={200} height={200} />
      <Heading color='gray.100' fontSize='xl' mt={20} mb={6}>
        Acesse sua conta
      </Heading>
      <Input
        placeholder='E-mail'
        mb={4}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        onChangeText={setEmail}
      />
      <Input
        placeholder='Senha'
        secureTextEntry
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        onChangeText={setPassword}
        // InputRightElement={
        //   <Icon as={<Eye color={colors.gray[300]} />} mr={4} />
        // }
      />
      <Button
        isLoading={isLoading}
        title='Entrar'
        onPress={() => handleSignIn()}
      />
    </VStack>
  );
}
