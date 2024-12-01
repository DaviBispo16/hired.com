import { useState, useContext, useEffect} from "react";
import { Alert } from "react-native";
import { Container, Login, Heading, Subtitles, InputButton, EntryButtonTitle, RedirectArea} from "./styles";
import { InputAddEmail, InputAddPasscode } from "../../components/InputAdd";
import { AreaNavegationLogin } from "../../components/AreaNavegation";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    LoginRegisterTabs: undefined;
    MainTabs: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>

export default function LoginScreen() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigation = useNavigation<NavigationProps>();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        try {
            const response = await axios.post('http://10.0.2.2:3000/usuario/login', {
                email,
                senha: password
            });
        navigation.replace('MainTabs');
      } catch (error: any) {
            alert(error.request ? 'Não foi possível fazer login' : 'Erro de rede: Nenhuma resposta recebida do servidor.');
        }
    } 
    return (
        <Container>
            <Login>
                <Heading>Acesse sua conta</Heading>
                    <Subtitles>Email</Subtitles>                    
                    <InputAddEmail email={email} onChangeEmail={setEmail}/>
                    <Subtitles>Senha</Subtitles>
                    <InputAddPasscode passcode={password} onChangePasscode={setPassword}/>
                    <InputButton onPress={handleLogin}>
                        <EntryButtonTitle>Entrar</EntryButtonTitle>
                    </InputButton>
            </Login>
        </Container>
    )
}