///<reference path='../../model/route.ts' />
import React from "react";
import lazyLoad from "@/router/utils/lazyLoad"
import Layouts from "@/layouts/index"

//home页面 路由
const homeRouter:ModelRoute.Route[] = [
  {
    element:<Layouts />,
    meta:{
      title:'主页'
    },
    path: "/home",
    sidebar:true,
    isPage:false,
    icon:"HomeOutlined",
    children:[
      {
        path: "/home/index",
        element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
        meta:{
          title:'首页'
        },
        sidebar:true,
        isPage:true,
        children:[
          {
            path: "/home/index/details",
            element: lazyLoad(React.lazy(() => import("@/views/home/index2"))),
            meta:{
              title:'首页2'
            },
            sidebar:false,
            isPage:true
          }
        ]
      }
    ]
  }
]

export default  homeRouter
