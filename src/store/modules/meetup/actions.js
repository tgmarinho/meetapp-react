export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function createMeetupSuccess(data) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    payload: { data },
  };
}

export function createMeetupFailure() {
  return {
    type: '@meetup/CREATE_MEETUP_FAILURE',
  };
}
