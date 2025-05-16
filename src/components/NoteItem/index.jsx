import { FiPlus,FiX } from "react-icons/fi";

import {Container} from "./style"

export function NoteItem({isNew, Value, onclick,Ishalf,...rest}){
    return(
        <Container isNew={isNew}
        Ishalf={Ishalf}>
            <input 
            type="text"
            value={Value}
            readOnly={!isNew}
            {...rest}/>

            <button 
            type="button"
            onClick={onclick}
            className={isNew ?'button-add':"button-delete"}>
                {isNew? <FiPlus />: <FiX /> }
            </button>
        </Container>
    )
}