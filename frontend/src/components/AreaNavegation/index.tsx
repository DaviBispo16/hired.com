import { Container, Heading, ButtomNavigation, NavigationButtonTitle } from "./styles";

export function AreaNavegationLogin() {
    return (
        <Container>
            <Heading>Não possui uma conta?</Heading>
                <ButtomNavigation>
                    <NavigationButtonTitle>Criar</NavigationButtonTitle>
                </ButtomNavigation>
        </Container>
    );
}

export function AreaNavegationRegister() {
    return (
        <Container>
            <Heading>Já possui conta?</Heading>
                <ButtomNavigation>
                    <NavigationButtonTitle>Acessar</NavigationButtonTitle>
                </ButtomNavigation>
        </Container>
    )
}