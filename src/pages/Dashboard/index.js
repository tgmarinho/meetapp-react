import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import api from '~/services/api';
import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const data = response.data.map(meetup => {
        return {
          id: meetup.id,
          title: meetup.title,
          date: format(parseISO(meetup.date), "d 'de' MMMM', às ' h'h'", {
            locale: pt,
          }),
        };
      });

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h1>Meus Meetups</h1>
        <Link to="/meetup/new">
          <button type="button">Novo meetup</button>
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <p>{meetup.title}</p>
            <span>{meetup.date}</span>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
