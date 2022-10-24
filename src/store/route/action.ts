///<reference path="../../model/route.ts"/>
import * as ActionTypes from './actionTypes'

/**
 * 设置路由表数据
 * @param {ModelRoute.Route[]}routeList
 */
export const setRouteList = (
  routeList: ModelRoute.Route[]
) => ({
  type: ActionTypes.ROUTE_LIST,
  routeList
})

export const setCurrentPath = (currentPath: string) => ({
  type: ActionTypes.CURRENT_PATH,
  currentPath
})

export const setMenus = (menus: ModelRoute.MenuBtn[]) => ({
  type: ActionTypes.MENUS,
  menus
})
