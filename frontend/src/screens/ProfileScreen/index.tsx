import { AreaButtonUpdate, AreaHeading,  Container, Heading, HeadingButtomUpdate, AreaButtonDelete, HeadingButtomDelete, Subtitles, InputButton, EntryButtonTitle, LeaveButton} from "./styles";
import { InputAddUsername, InputAddEmail, InputAddPasscode } from "../../components/InputAdd";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";

type RootStackParamList = {
    LoginRegisterTabs: undefined;
    MainTabs: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>


export default function ProfileScreen() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    const navigation = useNavigation<NavigationProps>();

    const handleUpdate = () => {
        if (!name || !email || !password) {
            alert('Preencha todas as informações!');
            return;
        }
        alert('Usuário atualizado com sucesso!');
    }

    return (
        <Container>
            <AreaHeading>
                <Heading>Editar Perfil</Heading>
            </AreaHeading>
    
            <Subtitles>Nome</Subtitles>
            <InputAddUsername username={name} onChangeUsername={setName}/>
            <Subtitles>Email</Subtitles>
            <InputAddEmail email={email} onChangeEmail={setEmail}/>
            <Subtitles>Senha</Subtitles>
            <InputAddPasscode passcode={password} onChangePasscode={setPassword}/>
            <InputButton onPress={handleUpdate}>
                <EntryButtonTitle>Atualizar</EntryButtonTitle>
            </InputButton>
            <LeaveButton onPress={() => navigation.navigate('LoginRegisterTabs')}>
                <EntryButtonTitle>Sair</EntryButtonTitle>
            </LeaveButton>
        </Container>
    )
}