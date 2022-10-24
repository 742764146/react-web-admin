///<reference path="../../model/store/notPersistence.ts"/>
import * as actionTypes from './actionTypes'

const notPersistence:ModelStoreNotPersistence.NotPersistence = {
  loading:false
}

export default function reducer(state = notPersistence,action:any){
  const {type,loading} = action

  switch (type) {
    case actionTypes.LOADING:
      return {...state,loading}
  }
  return state
}
