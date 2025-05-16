import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {Container, Brand, Menu, Search, Content, NewNote} from './style.js'
import {Note} from '../../components/Note/index.jsx'
import {ButtonText} from '../../components/ButtonText/index.jsx'
import {Header} from '../../components/Header/index.jsx'
import {Input} from '../../components/Input/index.jsx'
import {Section} from '../../components/section/index.jsx'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>RockeatBites</h1>
            </Brand>

            <Header/>
                
            <Menu>
                <li><ButtonText title='Todos' isActive/></li>
                <li><ButtonText title='React' isActive/></li>
                <li><ButtonText title='Nodejs' isActive/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>

            <Content>
                <Section title='Minhas notas'>
                    <Note data={{title:'React',
                    tags:[
                        {id:1,name:'React'},
                        {id:2,name:'Rockeatseat'}
                    ]
                    }}/>
                </Section>
            </Content>

            <NewNote to='/new'>
                <FiPlus />
                criar nota
            </NewNote>

        </Container>
    )
}