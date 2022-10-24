///<reference path="../../model/store/user.ts"/>
import * as actionTypes from './actionTypes'

const user:ModelUser.User = {
    token:''
}

export default function reducer(state = user,action:any){
  const {type,token} = action

  switch (type) {
    case actionTypes.TOKEN:
      return {...state,token}
  }
  return state
}
