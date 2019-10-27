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

export function deleteMeetupRequest(id) {
  return {
    type: '@meetup/DELETE_MEETUP_REQUEST',
    payload: { id },
  };
}

export function updateMeetupRequest(data, id) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data, id },
  };
}
