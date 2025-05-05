import {Container,Links,Content} from './style.js'
import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import {Button} from '../../components/Button'
import {Section} from '../../components/section'
import {Tag} from '../../components/Tag'
export function Details(){
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title='Excluir nota'/>
          <h1>Introdução React</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Assumenda expedita quo dolores.
            Enim natus placeat quia doloribus quasi pariatur ratione,
            dignissimos tempore sint, quibusdam magni animi commodi
            eum tempora harum.
          </p>
          <Section title='Links úteis'>
            <Links>
              <li><a href="#">https:www.rockeatseat.com.br</a></li>
              <li><a href="#">https:www.rockeatseat.com.br</a></li>
            </Links>
          </Section>
          <Section title='Marcadores'>
              <Tag title="express"/>
              <Tag title="nodejs"/>
          </Section>
          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}