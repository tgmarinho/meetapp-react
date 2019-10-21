import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '~/assets/logo.svg';
import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.profile.name);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Link to="/">
          <nav>
            <img src={logo} alt="Meetapp" />
          </nav>
        </Link>

        <aside>
          <Profile>
            <div>
              <strong>{name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <button type="submit" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
