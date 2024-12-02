import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: rgb(24 29 40);
    padding: 10px;
    gap: 20px;
`

export const AreaHeading = styled.View`
    align-items: center;
    margin: 20px;
`

export const Heading = styled.Text`
    color: rgb(168 162 158);
    font-size: 26px;
    font-weight: 500;
`

export const AreaButtonUpdate = styled.TouchableOpacity`
    background-color: rgb(168 162 158);
    width: 250px;
    height: 70px;
    align-items: center;
    border-radius: 10px;
    justify-content: center; /* Centraliza o conteúdo dentro do botão */
`


export const HeadingButtomUpdate = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: rgb(24 29 40);
`

export const AreaButtonDelete = styled.TouchableOpacity`
    background-color: #b91c1c;
    width: 250px;
    height: 70px;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
`

export const HeadingButtomDelete = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: rgb(24 29 40);
`

export const Subtitles = styled.Text`
    font-size: 18px;
    font-weight: 380;
    color: rgb(168 162 158);;
`

export const InputButton = styled.TouchableOpacity`
    height: 50px;
    margin-top: 20px;
    background-color: rgb(163 163 163);
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

export const LeaveButton = styled.TouchableOpacity`
    height: 50px;
    margin-top: 20px;
    background-color: #b91c1c;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

export const EntryButtonTitle = styled.Text`
    font-size: 24px;
    font-weight: 500;
    color: rgb(24 29 40);
`