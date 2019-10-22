import produce from 'immer';

const INITIAL_STATE = {
  meetup: null,
  loading: false,
  error: null,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/CREATE_MEETUP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/CREATE_MEETUP_SUCCESS': {
        draft.meetup = action.payload.meetup;
        draft.loading = false;
        break;
      }
      case '@meetup/CREATE_MEETUP_FAILURE': {
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      }
      default:
    }
  });
}
