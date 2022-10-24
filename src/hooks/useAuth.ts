/**
 * 权限控制
 */
//模拟按钮权限数据
import { getMenus } from '@/store/getters'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useAuth = (authPath: string) => {
  const [auth, setAuth] = useState<boolean>(false)
  const menus: ModelRoute.MenuBtn[] = useSelector(getMenus)
  console.log('menus', menus)

  useEffect(() => {
    const result = menus.filter(
      (item) => item.routePath === authPath
    )
    if (result.length) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  }, [authPath])
  return auth
}
