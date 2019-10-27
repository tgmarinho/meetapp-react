import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { MdAddCircleOutline } from 'react-icons/md';
import { parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import Loading from '~/components/Loading';
import { Container } from './styles';
import ImageInput from './ImageInput';
import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';
import DatePicker from '~/components/DatePicker';
import history from '~/services/history';
import api from '~/services/api';

const schema = Yup.object().shape({
  banner_id: Yup.number()
    .transform(value => (!value ? undefined : value))
    .required('Banner is required'),
  title: Yup.string()
    .min(6, 'O título precisa de ter 6 caracteres no mínimo')
    .required('O título é obrigatório'),
  description: Yup.string().required('A Descrição é obrigatório'),
  date: Yup.date().required('A Data é obrigatória'),
  localization: Yup.string().required('A Localização é obrigatória'),
});

export default function Meetup({ match }) {
  const dispatch = useDispatch();

  const [meetup, setMeetup] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = match.params;

  useEffect(() => {
    async function loadMeetup() {
      try {
        if (id) {
          setLoading(true);
          const response = await api.get(`meetups/${id}`);

          setMeetup({
            ...response.data,
            date: parseISO(response.data.date),
          });

          setLoading(false);
        }
      } catch (err) {
        setLoading(false);

        history.push('/');
      }
    }

    loadMeetup();
  }, [id]);

  function handleSubmit(data) {
    if (id) {
      dispatch(updateMeetupRequest(data, id));
    } else {
      dispatch(createMeetupRequest(data));
    }
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
          <ImageInput name="banner_id" />

          <Input name="title" placeholder="Título do Meetup" />
          <Input
            name="description"
            placeholder="Descrição Completa"
            multiline
          />

          <DatePicker name="date" type="date" placeholder="Data do meetup" />
          <Input name="localization" placeholder="Localização" />

          <button type="submit">
            <MdAddCircleOutline size={20} />
            Salvar meetup
          </button>
        </Form>
      )}
    </Container>
  );
}

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
