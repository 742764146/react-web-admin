///<reference path="../../model/route.ts"/>
/**
 * 获取路由表
 * @param state
 * @returns {ModelRoute.Route[]} 路由表数据
 */
export const getRouteList = (state: any) =>
  state.route.userList
/**
 * 获取当前页面路径
 * @param state
 * @returns {string} 页面地址
 */
export const getCurrentPath = (state: any) =>
  state.route.currentPath
/**
 * 获取按钮权限
 * @param state
 * @returns {ModelRoute.Menu[]} 按钮权限数据
 */
export const getMenus = (state: any) => state.route.menus
