import { FlatList } from "react-native";
import { Container, AreaText, Heading, ContainerListEmpty, ListEmpty, ListEmptyText} from "./styles";
import AreaJobs from '../../components/AreaJobs'
import { View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomeScreen() {
    // const data = 'fsdf';
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://10.0.2.2:3000/vagas');
                const json = response.data;
                setData(json);
            } catch (error) {
                console.error('Error ao buscar os dados', error);
            }
        }
        fetchJobs();
    }, []);

    return (
        <Container>
            <AreaText>
                <Heading>Encontre seu emprego</Heading>
            </AreaText>
        
            <View>
            <FlatList
                 data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }: any) => <AreaJobs title={item.titulo} />}
                ListEmptyComponent={() => (
                 <ListEmpty>
                 <ListEmptyText>Sem vagas no momento</ListEmptyText>
                </ListEmpty>
                 )}/>
        </View>

        </Container>
    )
}