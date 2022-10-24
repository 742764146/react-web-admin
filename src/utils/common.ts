//常用方法
///<reference path="../model/route.ts"/>
/**
 * 生成路由数据，一维数组
 * @param routeData
 */
export const gerenateRoutePage = (routeData:ModelRoute.Route[]) => {
  let routes:string[] = []
  routeData.map((ele:ModelRoute.Route) => {
    if(ele.isPage){
      routes.push(ele.path as string)
    }else if(ele.children && ele.children.length){
      routes.push(...gerenateRoutePage(ele.children))
    }
  })
  return routes
}
