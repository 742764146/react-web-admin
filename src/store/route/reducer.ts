///<reference path="../../model/store/route.ts"/>
import * as actionTypes from './actionTypes'

const route: ModelStoreRoute.Route = {
  routeList: [],
  currentPath: '',
  menus: []
}

export default function reducer(
  state = route,
  action: any
) {
  const { type, routeList, currentPath, menus } = action

  switch (type) {
    case actionTypes.ROUTE_LIST:
      return { ...state, routeList }
    case actionTypes.CURRENT_PATH:
      return { ...state, currentPath }
    case actionTypes.MENUS:
      return { ...state, menus }
  }
  return state
}
