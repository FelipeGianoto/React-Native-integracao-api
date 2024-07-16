import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type ListaTelas = {
  Login: undefined;
  Cadastro: undefined;
  Perfil: undefined;
  Explorar: undefined;
  Consultas: undefined;
  Principal: undefined;
  Tabs: undefined;
  Agendamento: {especialistaId: string}
}

export type NavigationProps< T extends keyof ListaTelas > = {
  navigation: NativeStackNavigationProp<ListaTelas, T>;
  route: RouteProp<ListaTelas, T>
}