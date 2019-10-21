import React from 'react';
import teste from '~/assets/teste.png';
import { Container, Content, Button } from './styles';

export default function Details(props) {
  const { meetup } = props.location.state;

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <section>
          <Button type="button" custom>
            Editar
          </Button>
          <Button type="button">Cancelar</Button>
        </section>
      </header>

      <Content>
        <img src={teste} alt="evento" />

        <p>{meetup.description}</p>

        <section>
          <span>
            {meetup.date} na {meetup.localization}
          </span>
        </section>
      </Content>
    </Container>
  );
}
