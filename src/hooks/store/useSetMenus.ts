/**
 * 设置按钮权限
 */
///<reference path="../../model/route.ts"/>
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setMenus } from '@/store/action'

export const useSetMenus = () => {
  const dispatch = useDispatch()
  const setMenusData = useCallback(
    (menus: ModelRoute.MenuBtn[]) => {
      dispatch(setMenus(menus))
    },
    [dispatch]
  )
  return {
    setMenusData: (menus: ModelRoute.MenuBtn[]) => {
      setMenusData(menus)
    }
  }
}
