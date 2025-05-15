import {Container,Form,Background} from './style.js'

import { Input } from '../../components/Input/index.jsx'
import {Button} from '../../components/Button/index.jsx'

import { FiLogIn,FiMail,FiLock } from 'react-icons/fi'

export function SingIn(){
    return(<Container>
        <Form>
            <h1>Rocket Notes</h1>
            <p>aplicação para salvar e gerenciar seus links úteis.</p>

            <h2>faça seu login</h2>
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

            <Button title="Entrar"/>
            <a href="#">
                criar conta
            </a>
        </Form>

        <Background />
    </Container>)
}