/**
 * 设置loading效果
 */
///<reference path="../../model/route.ts"/>
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading } from '@/store/notPersistence/action'

export const useSetLoading = () => {
  const dispatch = useDispatch()
  const setLoadingData = useCallback(
    (flag: boolean) => dispatch(setLoading(flag)),
    [dispatch]
  )
  return {
    setLoadingData: (flag: boolean) => {
      setLoadingData(flag)
    }
  }
}
