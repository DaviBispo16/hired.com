import { Container, Register, InputButton, Heading, Subtitles, EntryButtonTitle ,RedirectArea} from "./styles";
import { InputAddUsername, InputAddEmail, InputAddPasscode } from "../../components/InputAdd";
import { AreaNavegationRegister } from "../../components/AreaNavegation";

export default function RegisterScreen() {
    return (
    <Container>
        <Register>
            <Heading>Crie sua conta</Heading>
                <Subtitles>Nome</Subtitles>
                <InputAddUsername/>
                <Subtitles>Email</Subtitles>
                <InputAddEmail/>
                <Subtitles>Senha</Subtitles>
                <InputAddPasscode/>
                    <InputButton>
                        <EntryButtonTitle>Criar</EntryButtonTitle>
                    </InputButton>
                <RedirectArea>
                    <AreaNavegationRegister/>
                </RedirectArea>
        </Register>
    </Container>
    );
}