//路由
declare namespace ModelRoute {
  interface MetaProps {
    keepAlive?: boolean //状态保持
    title: string //页面标题
  }
  interface Route {
    path?: string //路径
    element: React.ReactNode
    children?: Route[] //子路由
    sidebar?: boolean //菜单栏
    meta?: MetaProps
    icon?: string //图标
    label?: React.ReactNode
    key?: React.Key | null
    isPage?: boolean //是否页面
  }

  interface Menu {
    path?: string //路径
    label: React.ReactNode
    key: React.Key
    icon?: React.ReactNode
    children?: Menu[]
  }

  interface Breadcrumb {
    label?: React.ReactNode
    path?: string
    key?: React.Key
    icon?: string
  }

  interface TabsList {
    label: React.ReactNode
    title?: React.ReactNode
    path?: string
    close?: boolean
    icon?: string
    key: string
  }
  interface MenuBtn {
    menuId: number //按钮id
    menuName: string //按钮名
    routePath: string //匹配地址
  }
}
