import { types } from '../types';

export const authReducer = ( state = {}, action ) => {

  // const state = {
  //   name: 'Rengoku',
  //   logged: true
  // }

  // const loginAction = {
  //   type: types.login,
  //   payload: {
  //     name: 'Rengoku',
  //     email: 'rengoku@gmail.com'
  //   }
  // }

  switch ( action.type ) {
    case types.login:
      return {
        ...action.payload,
        logged: true
      }
    case types.logout:
      return {
        logged: false,
      }
    default:
      return state;
  }

}
