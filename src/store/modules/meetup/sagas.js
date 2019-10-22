import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';
import api from '~/services/api';
import history from '~/services/history';
import {
  createMeetupSuccess,
  createMeetupRequest,
  createMeetupFailure,
} from './actions';

export function* createMeetup({ payload }) {
  try {
    // const date = parseISO(payload.data.date);
    // console.tron.log(date);
    yield call(api.post, 'meetups', {
      ...payload.data,
      // date,
    });

    toast.success('Meetup cadastrado com sucesso!');

    history.push('/meetups');
  } catch (err) {
    console.tron.log('ERRO ao CRIAR', err);
    toast.error('Ops! ocorreu um erro ao cadastrar o meetup');
    yield put(createMeetupFailure());
  }
}

export function* cancelMeetup({ payload }) {
  try {
    const response = yield call(api.delete, `/meetups/${payload.id}`);
    console.tron.log('res', response);
    toast.success('Meetup cancelado com sucesso!');
    history.push('/meetups');
  } catch (error) {
    console.tron.log('ERROR', error);
    toast.error('Ops! ocorreu um erro ao cancelar o meetup');
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/DELETE_MEETUP_REQUEST', cancelMeetup),
]);
