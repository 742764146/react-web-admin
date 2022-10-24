
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Router from "@/router/routes"
import AuthRouter from "./AuthRouter"
import { ConfigProvider,message } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

import Loading from "@/components/Loading"
import {store} from "@/store/index"
import React, { useState, useEffect } from 'react'
import {  useSelector } from 'react-redux'
import { getPrimaryColor } from '@/store/getters'


//message控件统一设置
message.config({
  top: 0, //距离顶部高度
  duration: 1,// 持续时间
  maxCount: 3 // 最大显示数, 超过限制时，最早的消息会被自动关闭
});
function App() {
  //token
  const [token,setToken] = useState<string>(store.getState().user.token || '');
  //是否加载loading
  const [loading,setLoading] = useState<boolean>(store.getState().notPersistence.loading || false)
  //设置当前成功跳转的页面
  useEffect(() => {
    // 监听state的变化
    let unsubscribe  = store.subscribe(() => {
      setToken(store.getState().user.token)
      setLoading(store.getState().notPersistence.loading)
    })
    return () => {
      // 取消监听
      unsubscribe();
    }
  },[])
  ConfigProvider.config({
    theme: {
      primaryColor: useSelector(getPrimaryColor),
    },
  });
  return (
      <BrowserRouter>
        <ConfigProvider locale={zhCN}>
          <AuthRouter>
            {
              token && !loading &&
              <Loading />
            }
            <Router />
          </AuthRouter>
        </ConfigProvider>
      </BrowserRouter>
  )
}

export default App
