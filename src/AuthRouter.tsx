///<reference path="./model/route.ts"/>
import { useEffect } from 'react'
import { useLocation, Navigate,useNavigate } from "react-router-dom";
import { rootRouter, routerArray,errorRouter } from '@/router/routes'
import {filterAsyncRoute} from "@/utils/route"
import trees from "@/utils/mockRoute"
import { getToken } from '@/store/getters'
import { useSelector, useDispatch } from 'react-redux'
import {gerenateRoutePage} from "@/utils/common"
import { setCurrentPath } from '@/store/route/action'
import {setLoading,setRouteList,setMenus} from "@/store/action"
import menus from "@/utils/mockAuth" 
const AuthRouter = (props: any) => {
  const navigate = useNavigate()
  const pathname = useLocation().pathname ? useLocation().pathname : '/login'
  const dispatch = useDispatch()
  const token = useSelector(getToken)
  let routeFlag = false
  useEffect(() => {
    if (token && !routeFlag) {
      routeFlag = true    
        // 模拟数据请求
      setTimeout(() => {    
          const routeData = filterAsyncRoute(trees,routerArray)
          rootRouter.push(...routeData,...errorRouter)
          dispatch(setRouteList([...routeData, ...errorRouter]))
          dispatch(setLoading(true))
          dispatch(setMenus(menus))
          const firstPage = gerenateRoutePage(routeData).length > 0 ? gerenateRoutePage(routeData)[0] : ''
          if(pathname !== '/login'){
            if(gerenateRoutePage(routeData).indexOf(pathname) > -1){
              navigate(pathname)
            } else {
              const url = gerenateRoutePage(routeData).find(item => item.indexOf(pathname) > -1) as string
              navigate(url ? url:pathname)
            }

          }else {
            navigate(firstPage)
          }
        },2000)
      }
  }, [])
  useEffect(() => {
    //判断没有token的时候只保留路由的前两位
    if (!token) {
      rootRouter.splice(2)
    }
  },[token])
  useEffect(() =>{
    //缓存当前能成功打开页面的地址，用于当页面跳转到404页面后进行返回    
    if(gerenateRoutePage(rootRouter).length && token){
      if(gerenateRoutePage(rootRouter).indexOf(pathname) > -1 && pathname !== '/404'){
        dispatch(setCurrentPath(pathname))
      }
    }
  },[pathname])
  // * 判断当前页面没有token，回到登录页
  if(!token && pathname !== '/login'){
    return <Navigate to="/login" replace />;
    // navigate("/login")
  }
  console.log('路由首位',token,rootRouter)  
  return props.children;
}
export default AuthRouter;



