/**
 * 设置token的hooks
 */
///<reference path="../../model/route.ts"/>
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '@/store/user/action'

export const useSetToken = () => {
  const dispatch = useDispatch()
  const setTokenData = useCallback(
    (token: string) => dispatch(setToken(token)),
    [dispatch]
  )
  return {
    setTokenData: (val: string) => {
      setTokenData(val)
    }
  }
}
