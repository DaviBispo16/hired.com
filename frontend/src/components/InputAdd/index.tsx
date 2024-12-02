import { Container } from "./styles"; 
import { InputAddEmailProps, InputAddPasscodeProps, InputAddUsernameProps} from "../../utils/types";

export function InputAddEmail({email, onChangeEmail}: any) {
    return (
        <Container placeholder="Digite seu email" 
        placeholderTextColor={'gray'} style={{color:'white'}} 
        value={email} 
        onChangeText={onChangeEmail}>

        </Container>
    );
}

export function InputAddPasscode({passcode, onChangePasscode}: any){
    return (
        <Container placeholder="Digite sua senha" 
        placeholderTextColor={'gray'} 
        style={{color:'white'}}
        value={passcode}
        onChangeText={onChangePasscode}>
        </Container>
    );
}

export function InputAddUsername({username, onChangeUsername}: any) {
    return (
        <Container placeholder="Digite seu nome" 
        placeholderTextColor={'gray'} 
        style={{color:'white'}}
        value={username}
        onChangeText={onChangeUsername}>
        </Container>
    );
}

export function InputAddDescription({description, onChangeDescription}: any) {
    return (
        <Container placeholder="Digite a descrição" 
        placeholderTextColor={'gray'} 
        style={{color:'white'}}
        value={description}
        onChangeText={onChangeDescription}>
        </Container>
    );
}

export function InputAddTitle({title, onChangeTitle}: any) {
    return (
        <Container placeholder="Digite o título" 
        placeholderTextColor={'gray'} 
        style={{color:'white'}}
        value={title}
        onChangeText={onChangeTitle}>
        </Container>
    );
}

export function InputAddPhone({phone, onChangePhone}: any) {
    return (
        <Container placeholder="Digite o telefone" 
        placeholderTextColor={'gray'} 
        style={{color:'white'}}
        value={phone}
        onChangeText={onChangePhone}>
        </Container>
    );
}

export function InputAddCompany({company, onChangeCompany}: any) {
    return (
        <Container placeholder="Digite a empresa" 
        placeholderTextColor={'gray'} 
        style={{color:'white'}}
        value={company}
        onChangeText={onChangeCompany}>
        </Container>
    );
}