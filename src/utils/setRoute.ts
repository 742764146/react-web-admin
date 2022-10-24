///<reference path="../model/route.ts"/>
import {routerArray} from "@/router/routes"
/**
 * 生成最后的动态路由数据
 * @param asyncRouterMap 后端返回的路由数据
 * @param dynamicRoutesMap 本地的动态路由数据
 * @returns
 */
const filterAsyncRouter = (
  asyncRouterMap: Array<any>,
  localRoutetMap:Array<any>
) => {
  let routes:ModelRoute.Menu[] = []
  localRoutetMap.map(localItem => {
    asyncRouterMap.map(asyncItem => {
      if(localItem.path === asyncItem.routePath){
        if(localItem.sidebar){
          const route:ModelRoute.Menu = {
            path:localItem.path,
            label:asyncItem.menuName,
            key:asyncItem.routePath,
            children:asyncItem.children && asyncItem.children.length ? filterAsyncRouter(asyncItem.children,localItem.children) : []
          }
          if(route.children && !route.children.length){
              delete  route.children
          }
          routes.push(route)
        }
      }
    })
  })
  return routes
}


/**
 * 通过本地路由循环赋予路由侧边栏,容器.精准匹配
 * @param dynamicRoutesMap 本地的动态路由数据
 * @param route 当前选中的路由
 * @returns
 */
const filterAsyncLocalRouter = (
  dynamicRoutesMap: Array<any>,
  route: any
) => {
  return dynamicRoutesMap.filter((dynamicRoute: any) => {
    if (dynamicRoute.path === route.routePath) {
      route.sidebar = dynamicRoute.sidebar
      route.exact = dynamicRoute.exact
      route.component = dynamicRoute.component
    } else if (
      dynamicRoute.routes &&
      dynamicRoute.routes.length
    ) {
      filterAsyncLocalRouter(dynamicRoute.routes, route)
    }
  })
}

export default filterAsyncRouter
