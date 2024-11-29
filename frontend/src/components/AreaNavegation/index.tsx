import { Container, Heading, ButtomNavigation, NavigationButtonTitle } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
  };

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function AreaNavegationLogin() {
    const navigation = useNavigation<NavigationProps>();
    return (
        <Container>
            <Heading>Não possui uma conta?</Heading>
                <ButtomNavigation onPress={() => navigation.navigate('RegisterScreen')}>
                    <NavigationButtonTitle>Criar</NavigationButtonTitle>
                </ButtomNavigation>
        </Container>
    );
}

export function AreaNavegationRegister() {
    const navigation = useNavigation<NavigationProps>();
    return (
        <Container>
            <Heading>Já possui conta?</Heading>
                <ButtomNavigation onPress={() => navigation.navigate('LoginScreen')}>
                    <NavigationButtonTitle>Acessar</NavigationButtonTitle>
                </ButtomNavigation>
        </Container>
    );
}