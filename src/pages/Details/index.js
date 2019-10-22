import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import teste from '~/assets/teste.png';
import { Container, Content, Button } from './styles';
import { deleteMeetupRequest } from '~/store/modules/meetup/actions';

export default function Details(props) {
  const { meetup } = props.location.state;
  const dispatch = useDispatch();

  function handleCancel(id) {
    dispatch(deleteMeetupRequest(id));
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <section>
          <Button type="button" custom>
            Editar
          </Button>
          <Button type="button" onClick={() => handleCancel(meetup.id)}>
            Cancelar
          </Button>
        </section>
      </header>

      <Content>
        <img src={meetup.banner.url} alt="evento" />

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
