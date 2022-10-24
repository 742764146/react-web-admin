/**
 * 导航
 */
///<reference path="../../../model/route.ts"/>
import { Menu } from 'antd'
import { useNavigate,useLocation } from "react-router-dom";
import {routerArray} from "@/router/routes"
import {filterAsyncSidebar} from "@/utils/route"
import trees from "@/utils/mockRoute"
import React, { useEffect, useState } from 'react'
// import * as Icons from "@ant-design/icons";
interface  MenuContainerProps extends React.HTMLAttributes<HTMLElement> {
  collapsed: boolean
  isSmall:boolean
  openKeys:string[],
  mode:'vertical' | 'inline' | 'horizontal',
  openChangeMenu:any,
  breadcrumbData:ModelRoute.Breadcrumb,
}


const MenuContainer = (props:MenuContainerProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const {collapsed,isSmall,openKeys,mode = 'inline',openChangeMenu,breadcrumbData} = props
  // 获取菜单列表并处理成 antd menu 需要的格式
  const [menuList, setMenuList] = useState<ModelRoute.Menu[]>(filterAsyncSidebar(trees,routerArray));
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  // 刷新页面菜单保持高亮
  useEffect(() => {
    let selectSiderList:string[] = []
    breadcrumbData[pathname].map((ele:any,idx:number) => {
      selectSiderList.push(ele.path)
    })
    setSelectedKeys(selectSiderList);
  }, [pathname]);
  //点击当前菜单跳转页面
  const clickMenu = ({ key }: { key: string }) => {
    navigate(key);
  }

  // 动态渲染 Icon 图标
  // const customIcons: { [key: string]: any } = Icons;
  // const addIcon = (name: string) => {
  //   return React.createElement(customIcons[name]);
  // };
  return (
    <Menu
      theme='dark'
      mode={mode}
      triggerSubMenuAction="hover"
      items={menuList}
      selectedKeys={!collapsed && !isSmall ? selectedKeys:collapsed && !isSmall ? [] : selectedKeys}
      openKeys={openKeys}
      onClick={clickMenu}
      onOpenChange={openChangeMenu}
    ></Menu>
  )
}

export default  MenuContainer
