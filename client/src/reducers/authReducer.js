import { TYPES } from '../actions/types';

const initialState = {
  isSignedIn: null,
  fullName: '',
  userId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        fullName: action.payload.fullName
      };
    case TYPES.SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        fullName: ''
      };

    default:
      return state;
  }
};
