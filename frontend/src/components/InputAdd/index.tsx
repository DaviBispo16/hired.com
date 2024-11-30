import { Container } from "./styles"; 
import { InputAddEmailProps, InputAddPasscodeProps, InputAddUsernameProps} from "../../utils/types";

export function InputAddEmail({email, onChangeEmail}: InputAddEmailProps) {
    return (
        <Container placeholder="Digite seu email" 
        placeholderTextColor={'gray'} style={{color:'white'}} 
        value={email} 
        onChangeText={onChangeEmail}>

        </Container>
    );
}

export function InputAddPasscode({passcode, onChangePasscode}: InputAddPasscodeProps){
    return (
        <Container placeholder="Digite sua senha" 
        placeholderTextColor={'gray'} 
        style={{color:'white'}}
        value={passcode}
        onChangeText={onChangePasscode}>
        </Container>
    );
}

export function InputAddUsername({username, onChangeUsername}: InputAddUsernameProps) {
    return (
        <Container placeholder="Digite seu nome" 
        placeholderTextColor={'gray'} 
        style={{color:'white'}}
        value={username}
        onChangeText={onChangeUsername}>
        </Container>
    );
}