///<reference path="../model/route.ts"/>
import React, {
  useState,
  useEffect,
} from 'react'
import {
  Layout,
  Drawer,
  MenuProps
} from 'antd'
import { useLocation } from 'react-router-dom'

import { rootRouter, routerArray } from '@/router/routes'
import {filterAsyncBreadcrumb} from "@/utils/route"
// import trees from "@/utils/mockRoute"
import HeaderContainer from '@/layouts/components/HeaderContainer'
import SiderContainer  from '@/layouts/components/SiderContainer'
import ContentContainer from '@/layouts/components/ContentContainer'
import TabsContainer from "@/layouts/components/TabsContainer"
import { useSelector } from 'react-redux'
import { getTab, getBreadCrumb, getNavigationMode } from '@/store/getters'
import {store} from "@/store/index"
import {useSynchroData} from "@/hooks"
import './index.less'

const Layouts = () => {
  const {pathname} = useLocation()
  //折叠菜单栏
  const [collapsed, setCollapsed] = useState<boolean>(false)
  //菜单栏样式
  const [collapsedClass, setCollapsedClass] =
    useState<string>(useSelector(getNavigationMode) === 1 ? 'site-layouts' : 'site-layouts site-layouts-full')
  //用户名
  const [userName, setUserName] = useState<string>('tony')
  const [autoHeight, setAutoHeight] =
    useState<boolean>(false)
  //控制菜单栏打开那个
  const [defaultelect, setDefaultElect] = useState<string[]>(['1'])
  //抽屉显示
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  //是否小屏幕
  const [isSmall,setIsSmall] = useState<boolean>(false);
  //选中的窗口
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  //面包屑数据
  const [breadcrumbData,setBreadcrumbData] = useState<ModelRoute.Breadcrumb>(filterAsyncBreadcrumb(routerArray,[]))
  //指定打开菜单栏
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  //缓存旧的菜单栏数据
   const [oldOpenKeys, setOldOpenKeys] = useState<string[]>([]);
  //导航条数据
  const [tabsList,setTabsList] = useState<ModelRoute.TabsList[]>([])
  //导航模式
  const [mode,setMode] = useState<'vertical' | 'inline' | 'horizontal'>('inline');
  //菜单栏布局
  const [navigationMode,setNavigationMode] = useSynchroData<number>( useSelector(getNavigationMode));


  useEffect(() => {
    gerenateOpenKeys()
    handleGetClinetHeight()
    handleGetClientWidth()
    window.onresize = () => {
      handleGetClinetHeight()
      handleGetClientWidth()
    }
  }, [])
  useEffect(() => {
    
    switch (store.getState().config.navigationMode){
      case 1:
        if (!openKeys.length) {
          setOpenKeys(oldOpenKeys)
        }
        setNavigationMode(1,(navigationMode:number) => {
          generateSiderClass(navigationMode)
          setModeType(1)
        })
        break
      case 2:
        //缓存旧的菜单数据
        if (openKeys.length) {
          setOldOpenKeys(openKeys)
        }
        if (!isSmall) {
           setOpenKeys([])
        }
        setNavigationMode(2,(navigationMode:number) => {
          generateSiderClass(navigationMode)
          setModeType(2)
        })
        break
      case 3:
        setNavigationMode(3,(navigationMode:number) => {
          generateSiderClass(navigationMode)
          setModeType(3)
        })
        break
    }

  }, [useSelector(getNavigationMode)])

  /**
   * 生成侧边栏数据
   */
  const gerenateOpenKeys = () => {
    openKeys.splice(0)
    breadcrumbData[pathname].map((ele:ModelRoute.Breadcrumb,idx:number) =>{
      if(idx === 0){
        openKeys.push(ele.path as string)
      }
    })
    setOpenKeys(openKeys)
  }
  const handleGetClinetHeight = () => {
    if (document.body.clientHeight > 768) {
      setAutoHeight(false)
    } else {
      setAutoHeight(true)
    }
  }
  const handleGetClientWidth = () => {
    if(document.body.clientWidth <= 768){
      setIsSmall(true)
      setCollapsedClass('site-layouts site-layouts-drawer')
    }else {
      setIsSmall(false)
      setVisibleDrawer(false)
    }
  }
  useEffect(() => {
    generateSiderClass(navigationMode)
  },[isSmall])
  /**
   * 隐藏/显示侧边栏菜单
   */
  const toggle = async () => {
   // setCollapsed(!collapsed)
    // console.log('collapsed',collapsed)
    if(!isSmall){
      // console.log('collapsed0',collapsed)
      if (collapsed) {
        // console.log('collapsed1',collapsed)
        setOpenKeys([])
        //定时器解决侧边栏闪烁问题
        setTimeout(() => {
          gerenateOpenKeys()
        },1)
        //判断是否侧边栏布局
        if(navigationMode === 1){
          setCollapsedClass('site-layouts')
        }else {
          setCollapsedClass('site-layouts site-layouts-full')
        }

      } else {
        // console.log('collapsed2',collapsed)
        setOpenKeys([])
        //判断是否侧边栏布局
        if(navigationMode === 1){
          setCollapsedClass('site-layouts ant-layouts-collapsed')
        }else {
          setCollapsedClass('site-layouts ant-layouts-collapsed site-layouts-full ant-layouts-collapsed-full')
        }

      }
    }else {
      setVisibleDrawer(!visibleDrawer)
      if(navigationMode === 2 && isSmall){
        console.log('collapsedcollapsed1')
        if (!openKeys.length) {
          setOpenKeys(oldOpenKeys)
        }
      }
    }
  }
  // 刷新页面菜单保持高亮
  useEffect(() => {
    setSelectedKeys([pathname]);
    generateTableList(rootRouter)
  }, [pathname]);
  //生成导航栏数据
  const generateTableList = (routeList:any[]) => {
    routeList.map(ele => {
      if(ele.path === pathname){
        const pathnameArr = [pathname]
        const resultArr = tabsList.filter((item1) =>
          pathnameArr.some((item2) => item2 === item1.path)
        );
        if(!resultArr.length){
          // tabsList.push({
          //   path:ele.path,
          //   title: ele.label,
          //   label: ele.label,
          //   close: true,
          //   key:ele.path
          // })
          setTabsList([...tabsList,{
            path:ele.path,
            title: ele.label,
            label: ele.label,
            close: true,
            key:ele.path
          }])
        }
      }else if(ele.children && ele.children.length){
        generateTableList(ele.children)
      }
    })
  }
  /**
   * 侧边栏样式
   * @param num 1 侧边栏 2 顶部栏 3
   */
  const generateSiderClass = (num:number) => {
    if(!isSmall){
      if (!collapsed) {
        //判断是否侧边栏布局
        if(num === 1){
          setCollapsedClass('site-layouts')
        }else {
          setCollapsedClass('site-layouts site-layouts-full')
        }

      } else {
        if(num === 1){
          setCollapsedClass('site-layouts ant-layouts-collapsed')
        }else {
          setCollapsedClass('site-layouts ant-layouts-collapsed site-layouts-full ant-layouts-collapsed-full')
        }

      }
    }else {
      setCollapsedClass('site-layouts site-layouts-drawer')
    }
  }
  useEffect(() => {
    setModeType(store.getState().config.navigationMode)
    // setModeType(1)
  },[collapsed,isSmall])

  /**
   * 设置导航栏模式
   * @param mode
   */
  const setModeType = (mode:number) => {
    switch (mode) {
      case 1:
        //大屏
        if(collapsed && !isSmall){
          setMode('vertical')
        }else if(!collapsed && !isSmall){
          // setMode('inline')
          setMode('inline')
        }

        //小屏
        if(collapsed && isSmall){
          setMode('inline')
        }else if(!collapsed && isSmall){
          setMode('inline')
        }
        break;
      case 2:
        //大屏
        if(collapsed && !isSmall){
          setMode('horizontal')
        }else if(!collapsed && !isSmall){
          setMode('horizontal')
        }
        //小屏
        if(collapsed && isSmall){
          setMode('inline')
        }else if(!collapsed && isSmall){
          setMode('inline')
        }
        break;
      case 3:
        break;
    }

  }


  /**
   * 侧边栏 SubMenu 展开/关闭的回调
   * @param {array} keys
   */
  const openChangeMenu: MenuProps['onOpenChange'] = keys => {
    // console.log('===0====');
    
    if(keys.length && openKeys.length){
      // console.log('==1==')
      if(keys[0] !== openKeys[0]){
        // console.log('==2==')
        setOpenKeys([])
        setOpenKeys(keys)
      }else if(keys.length > openKeys.length){
        // console.log('==3==')
        setOpenKeys([])
        setOpenKeys(keys)
      } else if(openKeys.length > keys.length){
        // console.log('==4==')
        setOpenKeys([])
        setOpenKeys(keys)
      }
    }else if(keys.length || openKeys.length){
      // console.log('==5==')
      // setOpenKeys([])
      setOpenKeys(keys)
    }
  };
  return (
    <>
      <Layout>
        {/*大屏幕侧边栏布局*/}
        {!isSmall  && navigationMode === 1 &&  <
          SiderContainer
            mode={mode}
            collapsed={collapsed}
            defaultelect={defaultelect}
            autoHeight={autoHeight}
            isSmall={isSmall}
            openKeys={openKeys}
            breadcrumbData={breadcrumbData}
            openChangeMenu={openChangeMenu}
            navigationMode={navigationMode}
        />}
        {/*小屏幕侧边栏/顶部布局*/}
        <Drawer
          placement="left"
          onClose={() => setVisibleDrawer(false)}
          open={visibleDrawer}
          closable={false}
          width={200}
          className='drawer'
        >
          {<SiderContainer
            mode={mode}
            collapsed={collapsed}
            defaultelect={defaultelect}
            autoHeight={autoHeight}
            isSmall={isSmall}
            openKeys={openKeys}
            breadcrumbData={breadcrumbData}
            openChangeMenu={openChangeMenu}
            navigationMode={navigationMode}
          />}
        </Drawer>
        <Layout className={collapsedClass}>
          {/*头部*/}
          {<HeaderContainer
            toggle={toggle}
            collapsed={collapsed}
            userName={userName}
            isSmall={isSmall}
            breadcrumbData={breadcrumbData}
            breadCrumb={useSelector(getBreadCrumb)}
            navigationMode={navigationMode}
            mode={mode}
            openKeys={openKeys}
            openChangeMenu={openChangeMenu}
          />}
          {/*导航条*/}
          {useSelector(getTab) && <TabsContainer
            isSmall={isSmall}
            tabsList={tabsList}
            setTabsList={setTabsList}
          />}
          {/*公共内容*/}
          {<ContentContainer />}
        </Layout>
      </Layout>
    </>
  )
}

export default Layouts
