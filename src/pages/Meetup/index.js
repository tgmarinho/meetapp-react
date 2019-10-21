import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import ImageInput from './ImageInput';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const meetup = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <ImageInput name="meetup_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição Completa" multiline />

        <Input name="date" placeholder="Data do meetup" />
        <Input name="localization" placeholder="Localização" />

        <button type="submit">Salvar Meetpu</button>
      </Form>
    </Container>
  );
}
