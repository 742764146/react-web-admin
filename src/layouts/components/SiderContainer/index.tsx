///<reference path="../../../model/route.ts"/>
import React, {
  useState,
  useEffect
} from 'react'
import {
  Layout
} from 'antd'
import { Scrollbars } from 'react-custom-scrollbars'
import LogoContainer from "@/layouts/components/LogoContainer"
import MenuContainer from "@/layouts/components/MenuContainer"
import "./index.less"
const {  Sider } = Layout

interface  SiderContainerProps extends React.HTMLAttributes<HTMLElement> {
  collapsed: boolean
  autoHeight:boolean
  defaultelect:string[]
  isSmall:boolean
  openKeys:string[]
  breadcrumbData:ModelRoute.Breadcrumb
  mode:'vertical' | 'inline' | 'horizontal'
  openChangeMenu:any
  navigationMode:number
}
if (import.meta.hot){
  import.meta.hot.decline()
}
const SiderContainer = (props:SiderContainerProps) => {
  const {collapsed,autoHeight,defaultelect,isSmall,openKeys,breadcrumbData,mode = 'inline',openChangeMenu,navigationMode} = props
  const [siderOpenKeys,setSiderOpenKeys] = useState<boolean>(false)
  useEffect(() => {
    setSiderOpenKeys(collapsed)
  },[collapsed,isSmall])
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={isSmall ? false : siderOpenKeys}
        className='sider-container'
      >
        {/*logo*/}
        <LogoContainer
          collapsed={collapsed}
          isSmall={isSmall}
          navigationMode={navigationMode}
        />
        {/*滚动条*/}
        <Scrollbars
          autoHeight={autoHeight}
          autoHeightMin={520}
          hideTracksWhenNotNeeded={true}
          className='scrollbars'
        >
          {/*菜单*/}
          <MenuContainer
            mode={mode}
            collapsed={collapsed}
            isSmall={isSmall}
            openKeys={openKeys}
            openChangeMenu={openChangeMenu}
            breadcrumbData={breadcrumbData}
          />
        </Scrollbars>
      </Sider>
    </>
  )
}



export default  SiderContainer;
