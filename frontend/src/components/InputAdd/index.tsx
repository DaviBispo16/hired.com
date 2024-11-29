import { Container } from "./styles"; 

export function InputAddEmail() {
    return (
        <Container placeholder="Digite seu email" placeholderTextColor={'gray'} style={{color:'white'}}></Container>
    );
}

export function InputAddPasscode() {
    return (
        <Container placeholder="Digite sua senha" placeholderTextColor={'gray'} style={{color:'white'}}></Container>
    );
}

export function InputAddUsername() {
    return (
        <Container placeholder="Digite seu nome" placeholderTextColor={'gray'} style={{color:'white'}}></Container>
    );
}