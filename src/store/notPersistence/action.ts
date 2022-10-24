import * as ActionTypes from './actionTypes'

export const setLoading = (loading:boolean) => ({
  type:ActionTypes.LOADING,
  loading
})
