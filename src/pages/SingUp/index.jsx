import {Container,Form,Background} from './style.js'

import { Input } from '../../components/Input/index.jsx'
import {Button} from '../../components/Button/index.jsx'

import { FiMail,FiLock,FiUser } from 'react-icons/fi'

export function SingUp(){
    return(<Container>
        <Background />
        
        <Form>
            <h1>Rocket Notes</h1>
            <p>aplicação para salvar e gerenciar seus links úteis.</p>

            <h2>Crie sua conta</h2>
            <Input 
                placeholder="Nome"
                type="text"
                icon={FiUser}
            />
            <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}
            />
            <Input 
                placeholder="Senha"
                type="password"
                icon={FiLock}
            />

            <Button title="Cadastrar"/>
            <a href="#">
                voltar para o login
            </a>
        </Form>
    </Container>)
}