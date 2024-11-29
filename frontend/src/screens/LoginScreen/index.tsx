import { Container, Login, Heading, Subtitles, InputButton, EntryButtonTitle, RedirectArea} from "./styles";
import { InputAddEmail, InputAddPasscode } from "../../components/InputAdd";
import { AreaNavegationLogin } from "../../components/AreaNavegation";

export default function LoginScreen() {
    return (
        <Container>
            <Login>
                <Heading>Acesse sua conta</Heading>
                    <Subtitles>Email</Subtitles>
                    <InputAddEmail/>
                    <Subtitles>Senha</Subtitles>
                    <InputAddPasscode/>
                    <InputButton>
                        <EntryButtonTitle>Entrar</EntryButtonTitle>
                    </InputButton>
                    <RedirectArea>
                        <AreaNavegationLogin/>
                    </RedirectArea>
            </Login>
        </Container>
    )
}