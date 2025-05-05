import { Container} from "./style.js";
import { ReactNode } from "react";
export function Section({title, children}:{ title: string; children: ReactNode }){
    return(
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>

    )
}