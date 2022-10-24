///<reference path='../../model/route.ts' />
import React from "react";
import lazyLoad from "@/router/utils/lazyLoad"
import Layouts from "@/layouts/index"
//系统管理 路由

const systemRouter:ModelRoute.Route[] = [
  {
    element:<Layouts />,
    meta:{
      title:'系统管理'
    },
    path: "/system",
    sidebar:true,
    isPage:false,
    icon:"SettingOutlined",
    children:[
      {
        path: "/system/department",
        element: lazyLoad(React.lazy(() => import("@/views/system/department/index"))),
        meta:{
          title:'部门管理'
        },
        sidebar:true,
        isPage:true,
      },
      {
        path: "/system/menu",
        element: lazyLoad(React.lazy(() => import("@/views/system/menu/index"))),
        meta:{
          title:'菜单管理'
        },
        sidebar:true,
        isPage:true,
      },
      {
        path: "/system/role",
        element: lazyLoad(React.lazy(() => import("@/views/system/role/index"))),
        meta:{
          title:'角色管理'
        },
        sidebar:true,
        isPage:true,
      },
      {
        path: "/system/user",
        element: lazyLoad(React.lazy(() => import("@/views/system/user/index"))),
        meta:{
          title:'用户管理'
        },
        sidebar:true,
        isPage:true,
      }
    ]
  }
]

export default  systemRouter
