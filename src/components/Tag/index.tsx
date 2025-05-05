import { Container } from "./style";
interface TagProps {
    title: string;
}
export function Tag({title}:TagProps){
    return(
        <Container>
            {title}
        </Container>
    )
}