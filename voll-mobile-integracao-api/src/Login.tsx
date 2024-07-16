import { VStack, Image, Text, Box, Link, useToast } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
import { useEffect, useState } from 'react';
import { fazerLogin } from './servicos/AutheticacaoServico';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

export default function Login({ navigation } : any) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(true);
  const toast = useToast();

  useEffect(() => {
    async function verificarLogin() {
      const token = await AsyncStorage.getItem('token')
      const pacienteId = await AsyncStorage.getItem('pacienteId');
      if(token && pacienteId){
        navigation.navigate('Tabs')
      }
      setCarregando(false)
    }
    verificarLogin();
  }, [])

  async function doLogin() {
    const resultado = await fazerLogin(email, senha)
    if(resultado){
      const { token } = resultado;
      AsyncStorage.setItem('token', token)

      const tokenDecodificado = jwtDecode(token) as any;
      const pacienteId = tokenDecodificado.id
      AsyncStorage.setItem('pacienteId', pacienteId)

      navigation.replace('Tabs')
    }else{
      toast.show({
        title: "Erro no login",
        description: "O email ou senha nao confere",
        background: "red.500",
        paddingX: 70,
        textAlign: "start"
      })
    }
    
  }

  if(carregando){
    return null;
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Titulo>
        Faça login em sua conta
      </Titulo>
      <Box>
        <EntradaTexto
          label="Email"
          placeholder="Insira seu endereço de e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </Box>
      <Botao onPress={doLogin}>Entrar</Botao>

      <Link href='https://www.alura.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}