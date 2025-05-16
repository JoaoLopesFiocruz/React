import {Header} from '../../components/Header';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { NoteItem } from '../../components/NoteItem';
import {Section} from '../../components/section'
import { TextArea } from '../../components/TextArea';
import { Container,Form } from './style';
import { Button } from '../../components/Button';

export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Título"/>
                    <TextArea placeholder="Observações"/>
                    <Section title="Links úteis">
                        <NoteItem Value="https://rockeatseat.com.br"/>
                        <NoteItem isNew placeholder="Novo link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem Value="React" Ishalf/>
                            <NoteItem isNew placeholder="Nova Tag" Ishalf/>
                        </div>
                    </Section>
                    <Button title='Salvar'/>
                </Form>
            </main>
        </Container>
    )
}