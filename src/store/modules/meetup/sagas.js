import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import {
  createMeetupSuccess,
  createMeetupRequest,
  createMeetupFailure,
} from './actions';

export function* createMeetup({ payload }) {
  try {
    const user = yield select(state => state.user.profile.id);
    console.tron.log('entrei no saga', { ...payload.data, date: new Date() });
    // const dateFormatted = parse;

    // const { title, description,  }

    const response = yield call(api.post, '/meetups', {
      ...payload.data,
      date: new Date(),
    });

    console.tron.log('DEU CERTO', response.data);

    // yield put(createMeetupSuccess(token, user));
    toast.success('Meetup cadastrado com sucesso!');

    // history.push('/dashboard');
  } catch (err) {
    console.tron.log(err);
    toast.error('Ops! ocorreu um erro ao cadastrar  o meetup');
    yield put(createMeetupFailure());
  }
}

export default all([takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup)]);
