import { TYPES } from './types';

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
