import { TYPES } from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case TYPES.FETCH_STREAMS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case TYPES.FETCH_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case TYPES.CREATE_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case TYPES.EDIT_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case TYPES.DELETE_STREAM:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
