import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import { MdAddCircleOutline, MdKeyboardArrowRight } from 'react-icons/md';
import api from '~/services/api';
import { Container, Meetup } from './styles';
import history from '~/services/history';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('dashboard');

      const data = response.data.map(meetup => {
        return {
          ...meetup,
          date: format(parseISO(meetup.date), "d 'de' MMMM', às ' h'h'", {
            locale: pt,
          }),
        };
      });
      setMeetups(data);
    }

    loadMeetups();
  }, []);

  function handleAddNew() {
    history.push('/meetup/new');
  }

  return (
    <Container>
      <header>
        <h1>Meus Meetups</h1>
        <button type="button" onClick={handleAddNew}>
          <MdAddCircleOutline size={20} />
          Novo meetup
        </button>
      </header>

      <ul>
        {meetups.length > 0 ? (
          meetups.map(meetup => (
            <Link
              to={{ pathname: `details/${meetup.id}`, state: { meetup } }}
              key={meetup.id}
            >
              <Meetup>
                <p>{meetup.title}</p>
                <span>
                  {meetup.date} <MdKeyboardArrowRight size={24} color="#fff" />
                </span>
              </Meetup>
            </Link>
          ))
        ) : (
          <Meetup>
            <p>
              <em>Nenhum meetup cadastrado.</em>
            </p>
          </Meetup>
        )}
      </ul>
    </Container>
  );
}
