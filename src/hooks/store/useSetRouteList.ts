/**
 * 设置路由的hooks
 */
///<reference path="../../model/route.ts"/>
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setRouteList } from '@/store/route/action'

export const useSetRouteList = () => {
  const dispatch = useDispatch()
  const setRouteListData = useCallback(
    (routeList: ModelRoute.Route[]) =>
      dispatch(setRouteList(routeList)),
    [dispatch]
  )
  return {
    setRouteListData: (routeList: ModelRoute.Route[]) => {
      setRouteListData(routeList)
    }
  }
}
