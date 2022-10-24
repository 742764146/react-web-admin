/**
 * 同步数据hook
 */
import { useRef, useEffect, useState } from 'react'

export const useSynchroData = <T>(data: T): any => {
  const cbRef: { current: any } = useRef()
  const [anyData, setAnyData] = useState<T>(data)
  useEffect(() => {
    cbRef.current && cbRef.current(anyData)
  }, [anyData])
  return [
    anyData,
    (val: any, callback: any) => {
      cbRef.current = callback
      setAnyData(val)
    }
  ]
}
