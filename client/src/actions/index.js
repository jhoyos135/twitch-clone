import { TYPES } from './types';
import streams from '../apis/streams';
import history from '../history';

export const signIn = (userId, fullName) => {
  return {
    type: TYPES.SIGN_IN,
    payload: { userId, fullName }
  };
};

export const signOut = () => {
  return {
    type: TYPES.SIGN_OUT
  };
};

// video streams actions

export const createStream = values => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await streams.post('/streams', { ...values, userId });
  dispatch({
    type: TYPES.CREATE_STREAM,
    payload: res.data
  });
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const res = await streams.get('/streams');
  dispatch({
    type: TYPES.FETCH_STREAMS,
    payload: res.data
  });
};

export const fetchStream = id => async dispatch => {
  const res = await streams.get(`/streams/${id}`);
  dispatch({
    type: TYPES.FETCH_STREAM,
    payload: res.data
  });
};

export const editStream = (id, values) => async dispatch => {
  const res = await streams.patch(`/streams/${id}`, values);
  dispatch({
    type: TYPES.EDIT_STREAM,
    payload: res.data
  });
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({
    type: TYPES.DELETE_STREAM,
    payload: id
  });
  history.push('/');
};
