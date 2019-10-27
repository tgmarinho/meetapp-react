import React from 'react';
import { useDispatch } from 'react-redux';
import { MdEdit, MdDeleteForever, MdEvent, MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Container, Content, Button } from './styles';
import { deleteMeetupRequest } from '~/store/modules/meetup/actions';
import history from '~/services/history';

export default function Details({ location }) {
  const { meetup } = location.state;
  const dispatch = useDispatch();

  function handleCancel(id) {
    dispatch(deleteMeetupRequest(id));
  }

  function handleEdit(id) {
    history.push(`/meetup/${id}`, { id });
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <section>
          <Button type="button" custom onClick={() => handleEdit(meetup.id)}>
            <MdEdit size={20} />
            Editar
          </Button>

          <Button type="button" onClick={() => handleCancel(meetup.id)}>
            <MdDeleteForever size={20} />
            Cancelar
          </Button>
        </section>
      </header>

      <Content>
        <img src={meetup.banner.url} alt="evento" />

        <p>{meetup.description}</p>

        <section>
          <span>
            <MdEvent size={20} /> {meetup.date} <MdLocationOn size={20} />
            {meetup.localization}
          </span>
        </section>
      </Content>
    </Container>
  );
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      meetup: PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.number,
        banner: PropTypes.shape({
          url: PropTypes.string,
        }),
        localization: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
  }).isRequired,
};
