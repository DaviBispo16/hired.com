import { Container, Subtitles, Heading, InputButton, CreateButtonTitle, AreaHeading} from "./styles";
import { InputAddDescription, InputAddTitle,InputAddPhone,InputAddCompany} from "../../components/InputAdd";
import { useState } from "react";

export default function AddJobsScreen() {
    const [description, setDescription] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    
    const handleCreateJob = () => {
        if (!description || !title || !phone || !company) {
            alert('Preencha todas as informações!');
            return
        }
        alert('Vaga criada com sucesso!');
    }

    return (
        <Container>
            <AreaHeading>
                <Heading>Adicionar Vaga</Heading>
            </AreaHeading>
            <Subtitles>Descrição</Subtitles>
            <InputAddDescription description={description} onChangeDescription={setDescription}/>
            <Subtitles>Título</Subtitles>
            <InputAddTitle title={title} onChangeTitle={setTitle}/>
            <Subtitles>Telefone</Subtitles>
            <InputAddPhone phone={phone} onChangePhone={setPhone}/>
            <Subtitles>Empresa</Subtitles>
            <InputAddCompany company={company} onChangeCompany={setCompany}/>    
            <InputButton onPress={handleCreateJob}>
                <CreateButtonTitle>Criar</CreateButtonTitle>
            </InputButton>
        </Container>
    )
}