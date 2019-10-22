import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';
import ImageInput from './ImageInput';
import { createMeetupRequest } from '~/store/modules/meetup/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';
import DatePicker from '~/components/DatePicker';

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

export default function Profile() {
  // const meetup = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    console.tron.log('data', data);
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <ImageInput name="banner_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição Completa" multiline />

        <DatePicker name="date" type="date" placeholder="Data do meetup" />
        <Input name="localization" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline size={20} />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
