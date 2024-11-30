import axios from "axios";
import { useState } from "react";
import { Alert } from "react-native";
import { Container, Register, InputButton, Heading, Subtitles, EntryButtonTitle ,RedirectArea} from "./styles";
import { InputAddUsername, InputAddEmail, InputAddPasscode } from "../../components/InputAdd";
import { AreaNavegationRegister } from "../../components/AreaNavegation";

export default function RegisterScreen() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleRegistration = async () => {
        if (!name || !email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        try {
            const response = await axios.post('http://10.0.2.2:3000/usuario/registro', {
                nome: name,
                email, 
                senha: password
            });
            console.log(response.data);
        } catch (error: any) {
            alert(error.request ? 'Email ou senha incorreto(s).' : 'Erro de rede: Nenhuma resposta recebida do servidor.');
        }
    }
    return (
    <Container>
        <Register>
            <Heading>Crie sua conta</Heading>
                <Subtitles>Nome</Subtitles>
                <InputAddUsername username={name} onChangeUsername={setName} />
                <Subtitles>Email</Subtitles>
                <InputAddEmail email={email} onChangeEmail={setEmail}/>
                <Subtitles>Senha</Subtitles>
                <InputAddPasscode passcode={password} onChangePasscode={setPassword}/>
                    <InputButton onPress={handleRegistration}>
                        <EntryButtonTitle>Criar</EntryButtonTitle>
                    </InputButton>
                <RedirectArea>
                    <AreaNavegationRegister/>
                </RedirectArea>
        </Register>
    </Container>
    );
}