///<reference path="../route.ts"/>
declare namespace ModelStoreRoute {
  interface Route {
    routeList: ModelRoute.Route[] //路由表
    currentPath: string //当前路径
    menus: ModelRoute.Menu[] //按钮权限
  }
}
