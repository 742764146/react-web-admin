///<reference path="../model/route.ts"/>
import {routerArray} from "@/router/routes"
import * as Icons from "@ant-design/icons";
import React from 'react'
// 动态渲染 Icon 图标
const customIcons: { [key: string]: any } = Icons;
const addIcon = (name: string) => {
  return React.createElement(customIcons[name]);
};

/**
 * 生成菜单栏数据
 * @param asyncRouterMap 后端返回的路由数据
 * @param dynamicRoutesMap 本地的动态路由数据
 * @returns
 */
const filterAsyncSidebar = (
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
            icon:localItem.icon ?addIcon(localItem.icon) : addIcon('AppstoreOutlined'),
            children:asyncItem.children && asyncItem.children.length ? filterAsyncSidebar(asyncItem.children,localItem.children) : [],
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
 * 生成路由数据
 * @param asyncRouterMap 后端返回的路由数据
 * @param dynamicRoutesMap 本地的动态路由数据
 * @returns
 */
const filterAsyncRoute = (
  asyncRouterMap: Array<any>,
  localRoutetMap:Array<any>
) => {
  let routes:ModelRoute.Route[] = []
  localRoutetMap.map(localItem => {
    asyncRouterMap.map(asyncItem => {
      if(localItem.path === asyncItem.routePath){
        const route:ModelRoute.Route = {
          element:localItem.element,
          path:localItem.path,
          label:asyncItem.menuName,
          key:asyncItem.routePath,
          meta:localItem.meta,
          children:asyncItem.children && asyncItem.children.length ? filterAsyncRoute(asyncItem.children,localItem.children) : [],
          isPage:localItem.isPage || false
        }
        if(route.children && !route.children.length){
          delete  route.children
        }
        routes.push(route)
      }
    })
  })
  return routes
}


/**
 * 生成面包屑数据
 * @param localRoutetMap
 * @param route
 */
const filterAsyncBreadcrumb = (
  localRoutetMap: Array<any>,
  route: Array<any>
  ) => {
  let routes:ModelRoute.Breadcrumb = {}
  localRoutetMap.map((ele) => {
    routes[ele.path] = [...route,{
      label:ele.meta.title,
      path:ele.path
    }]
    if(ele.children && ele.children.length){
      routes = {...routes,...filterAsyncBreadcrumb(ele.children,routes[ele.path])}
    }
  })
  return routes
}



export {
  filterAsyncSidebar,
  filterAsyncRoute,
  filterAsyncBreadcrumb
}
