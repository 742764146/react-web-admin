///<reference path="../../../model/route.ts"/>
import React, {
  useState,
  createElement, useEffect
} from 'react'
import {
  Layout,
  Menu,
  Affix,
  Dropdown,
  Tooltip,
  Breadcrumb,
  Avatar,
  Modal,
  message
} from 'antd'
import {
  DownOutlined,
  FullscreenOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Theme from "@/layouts/components/Theme"
import HeaderContainerLeft from "./components/HeaderContainerLeft"
import HeaderContainerRight from "./components/HeaderContainerRight"
import LogoContainer from "@/layouts/components/LogoContainer"
import MenuContainer from "@/layouts/components/MenuContainer"
import InformContainer from "@/layouts/components/InformContainer"
import './index.less'
const { Header, Content } = Layout
interface HeaderContainerProps extends React.HTMLAttributes<HTMLElement> {
  toggle: Function
  collapsed: boolean
  userName:string
  isSmall:boolean
  breadcrumbData:ModelRoute.Breadcrumb,
  breadCrumb:boolean
  navigationMode:number
  mode:'vertical' | 'inline' | 'horizontal'
  openKeys:string[]
  openChangeMenu:any
}
if (import.meta.hot){
  // import.meta.hot.decline()
}
const HeaderContainer = (props:HeaderContainerProps) => {
  const {toggle,collapsed,userName,isSmall,breadcrumbData,breadCrumb,navigationMode,mode,openKeys,openChangeMenu} = props
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleInfo, setVisibleInfo] = useState<boolean>(false);
  const top:number = 0;

  //点击当前菜单跳转页面
  const clickMenu = ({ key }: { key: string }) => {
    console.log('key2',key)
  }
  const [classLayout, setClassLayout] = useState<string>(navigationMode === 1?'site-layout-background':
  'site-layout-background site-layout-background-top')
  useEffect(() => {
    switch (navigationMode) {
      case 1:
        setClassLayout('site-layout-background')
        break;
      case 2:
        setClassLayout('site-layout-background site-layout-background-top')
        break;
    }
  },[navigationMode])
  return (
    <>
      <Affix offsetTop={top} className="header-container">
        <Header
          className={classLayout}
          style={{ padding: 0 }}
        >
          {/*侧边栏菜单时候左侧内容*/}
          {
            navigationMode === 1 && <HeaderContainerLeft
              toggle={toggle}
              breadcrumbData={breadcrumbData}
              collapsed={collapsed}
              breadCrumb={breadCrumb}
              isSmall={isSmall}
              navigationMode={navigationMode}
            />
          }

          {/*顶部菜单时候左侧内容*/}
          {
            !isSmall && navigationMode === 2 && <div className='site-layout-menu'>
              <LogoContainer
                collapsed={collapsed}
                isSmall={isSmall}
                navigationMode={navigationMode}
              />
              <MenuContainer
                collapsed={collapsed}
                isSmall={isSmall}
                mode='horizontal'
                openKeys={openKeys}
                openChangeMenu={openChangeMenu}
                breadcrumbData={breadcrumbData}
              />
            </div>
          }
          {/*顶部菜单小屏左侧内容*/}
          {
            isSmall && navigationMode === 2 && <HeaderContainerLeft
              toggle={toggle}
              breadcrumbData={breadcrumbData}
              collapsed={collapsed}
              breadCrumb={breadCrumb}
              isSmall={isSmall}
              navigationMode={navigationMode}
            />
          }
          {/*右侧内容*/}
          <HeaderContainerRight
            setVisible={setVisible}
            userName={userName}
            navigationMode={navigationMode}
            setVisibleInfo={setVisibleInfo}
            visibleInfo={visibleInfo}
          />
        </Header>
      </Affix>
      {/*自定义界面*/}
      <Theme
        visible={visible}
        setVisible={setVisible}
      />
      {/* 通知 */}
      <InformContainer
        visible={visibleInfo}
        setVisible={setVisibleInfo}
      />
    </>
  )
}

export default HeaderContainer

