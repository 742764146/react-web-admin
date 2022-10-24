///<reference path="../../../model/route.ts"/>
import { Tabs, message } from "antd";
import { HomeFilled } from "@ant-design/icons";
import React,{ useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropType from 'prop-types'
import "./index.less"


interface  TabsContainerProps extends React.HTMLAttributes<HTMLElement> {
  isSmall:boolean
  tabsList:ModelRoute.TabsList[],
  setTabsList:Function
}

const TabsContainer = (props:TabsContainerProps) => {
  const {isSmall,tabsList,setTabsList} = props
  // const { TabPane } = Tabs;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [activeValue, setActiveValue] = useState<string>(pathname);
  // click tabs
  const clickTabs = (path: string) => {
    navigate(path);
  };
  useEffect(() => {
    setActiveValue(pathname)
  },[pathname])
  useEffect(() => {
    setTimeout(() => {
      if(tabsList.find(item => item.path === pathname)?.title){
        document.title = tabsList.find(item => item.path === pathname)?.title as string
      }
    },100)    
  },[pathname,tabsList])
  // delete tabs
  const delTabs = (tabPath?: string) => {

    if (pathname === tabPath) {
      tabsList.forEach((item,index) => {
        if (item.path !== tabPath) return;
        const nextTab = tabsList[index + 1] || tabsList[index - 1];
        if (!nextTab) return;
        navigate(nextTab.path as string);
      })
    }
    if(tabsList.length > 1){
      setTabsList(tabsList.filter((item) =>
        item.path !== tabPath
      ))
    }else {
      message.warn('这是最后一页，不能再关闭了')
    }
  };
  return (
    <div className="tabs">
      {/* <Tabs
        activeKey={activeValue}
        onChange={clickTabs}
        hideAdd
        type="editable-card"
        onEdit={path => {
          delTabs(path as string);
        }}
      >
        {tabsList.map((item:ModelRoute.TabsList) => {
          return (
            <TabPane
              key={item.path}
              tab={
                <span>
                  {item.title}
								</span>
              }
              closable={item.close}
            ></TabPane>
          );
        })}
      </Tabs> */}
       <Tabs
        activeKey={activeValue}
        onChange={clickTabs}
        hideAdd
        type="editable-card"
        onEdit={path => {
          delTabs(path as string);
        }}
        items={tabsList}
      />
    </div>
  )
}


// TabsContainer.propTypes = {
//   isSmall:PropType.bool.isRequired,
//   tabsList:PropType.array.isRequired,
//   setTabsList:PropType.func.isRequired
// }


export default  TabsContainer
