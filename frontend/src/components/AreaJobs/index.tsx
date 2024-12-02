import { ContainerAreaJobs, HeadingAreaJobs} from "./styles";

export default function AreaJobs({title}: any) {
    return (
    <ContainerAreaJobs>
        <HeadingAreaJobs>{title}</HeadingAreaJobs>
    </ContainerAreaJobs>
    );
}