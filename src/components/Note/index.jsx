import {Container} from './style'
import {Tag} from '../Tag'

export function Note({data, ...rest}) {
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag=>{
                            return <Tag key={tag.id} title={tag.name}/>
                        })
                    }
                </footer>
            }
        </Container>
    )
}