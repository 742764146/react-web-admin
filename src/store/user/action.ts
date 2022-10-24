import * as ActionTypes from './actionTypes'

export const setToken = (token:string) => ({
  type:ActionTypes.TOKEN,
  token
})
