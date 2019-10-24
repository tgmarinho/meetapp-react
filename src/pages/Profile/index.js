import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O Email é obrigatório'),
  oldPassword: Yup.string()
    .min(6, 'Sua senha deve ter no mínimo 6 caracteres')
    .when('password', (password, field) =>
      password ? field.required('Senha atual é obrigatória.') : field
    ),
  password: Yup.string().min(6, 'Sua senha deve ter no mínimo 6 caracteres'),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref('password')],
      'Sua nova senha não combina com a senha informada'
    )
    .when('password', (password, field) =>
      password ? field.required('Confirmação de senha é obrigatório') : field
    ),
});

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço completo" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />
        <div>
          <button type="submit">
            <MdAddCircleOutline size={20} />
            Salvar perfil
          </button>
        </div>
      </Form>
    </Container>
  );
}
