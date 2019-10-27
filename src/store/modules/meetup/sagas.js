import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { createMeetupFailure } from './actions';

export function* createMeetup({ payload }) {
  try {
    yield call(api.post, 'meetups', {
      ...payload.data,
    });

    toast.success('Meetup cadastrado com sucesso!');

    history.push('/dashboard');
  } catch (err) {
    toast.error(
      `Ops! ocorreu um erro ao cadastrar o meetup. ${err.response.error}`
    );
    yield put(createMeetupFailure());
  }
}

export function* cancelMeetup({ payload }) {
  try {
    yield call(api.delete, `/meetups/${payload.id}`);
    toast.success('Meetup cancelado com sucesso!');
    history.push('/dashboard');
  } catch (error) {
    toast.error(
      `Ops! ocorreu um erro ao cancelar o meetup. ${error.response.error}`
    );
  }
}

export function* updateMeetup({ payload }) {
  try {
    yield call(api.put, `meetups/${payload.id}`, {
      ...payload.data,
    });

    toast.success('Meetup alterado com sucesso!');

    history.push('/dashboard');
  } catch (err) {
    toast.error(
      `Ops! ocorreu um erro ao alterar o meetup. ${err.response.error}`
    );
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/DELETE_MEETUP_REQUEST', cancelMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
