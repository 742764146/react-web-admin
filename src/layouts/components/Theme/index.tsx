/**
 * 自定义界面
 */
///<reference path="../../../model/store/config.ts"/>
import { Drawer, Divider, Switch, ConfigProvider, Tooltip } from 'antd'
import React, { useState } from "react";
import { FullscreenOutlined, SettingOutlined } from '@ant-design/icons'
import { SketchPicker } from 'react-color';
import { setWaterMask ,setBreadCrumb, setTab,setPrimaryColor,setNavigationMode } from "@/store/action"
import { useSelector, useDispatch } from 'react-redux'
import { getWaterMask,getBreadCrumb,getTab,getPrimaryColor,getNavigationMode } from "@/store/getters"
import gouImg from "@/assets/img/gou.png"
import "./index.less"
import { setRouteList } from '@/store/route/action'

interface ThemeProps extends React.HTMLAttributes<HTMLElement>{
  visible:boolean
  setVisible:Function
}
const Theme = (props:ThemeProps) => {
  const {visible,setVisible} = props
  const dispatch = useDispatch()
  //标签栏
  const [color, setColor] = useState({
    primaryColor: useSelector(getPrimaryColor),
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  });
  const onColorChange = (nextColor: Partial<typeof color>) => {
    const mergedNextColor = {
      ...color,
      ...nextColor,
    };
    setColor(mergedNextColor);
    dispatch(setPrimaryColor(mergedNextColor.primaryColor))
    ConfigProvider.config({
      theme: mergedNextColor,
    });
  };
  /**
   * 修改界面
   * @param  {boolean | ModelStoreConfig.Navigation} e
   * @param {string} status
   */
  const handleChangeSetUp = (e:boolean | ModelStoreConfig.Navigation,status:string) => {
      switch (status) {
        case 'watermark':
          dispatch(setWaterMask(e as boolean))
          break;
        case 'breadcrumb':
          dispatch(setBreadCrumb(e as boolean))
          break;
        case 'tab':
         dispatch(setTab(e as boolean))
          break;
        case 'navigationMode':
          dispatch(setNavigationMode(e as ModelStoreConfig.Navigation))
          break;
      }
  }
  return (
    <Drawer
      title="布局设置"
      closable={false}
      width={320}
      open={visible}
      onClose={() => {
        setVisible(false);
      }}
    >
      {/*主题色 */}
      <Divider className="divider">
        <SettingOutlined />
        主题色
      </Divider>
      <div className="theme-item theme-item2">
        <SketchPicker
          presetColors={['#4B75F6', '#25b864', '#ff6f00']}
          color={color.primaryColor}
          onChange={({ hex }) => {
            onColorChange({
              primaryColor: hex,
            });
          }}
        />
      </div>


      {/*导航模式*/}
      <Divider className="divider">
        <SettingOutlined />
        导航模式
      </Divider>
      <div className='theme-item theme-item3'>
        {/*侧边菜单布局*/}
        <Tooltip placement="top" title="侧边菜单布局">
          <div
            className='theme-item-model theme-item-model1'
            onClick={() => handleChangeSetUp(1,'navigationMode')}
          >
            {useSelector(getNavigationMode) === 1&& <img src={gouImg} className="theme-item-model-img"/>}
          </div>
        </Tooltip>
        {/*顶部菜单布局*/}
        <Tooltip placement="top" title="顶部菜单布局">
          <div
            className='theme-item-model theme-item-model2'
            onClick={() => handleChangeSetUp(2,'navigationMode')}
          >
            {useSelector(getNavigationMode) === 2 && <img src={gouImg} className="theme-item-model-img"/>}
          </div>
        </Tooltip>
        {/*混合菜单布局*/}
        {/*<Tooltip placement="top" title="混合菜单布局">*/}
        {/*  <div*/}
        {/*    className='theme-item-model theme-item-model3'*/}
        {/*    onClick={() => handleChangeSetUp(3,'navigationMode')}*/}
        {/*  >*/}
        {/*    {useSelector(getNavigationMode) === 3 && <img src={gouImg} className="theme-item-model-img"/> }*/}
        {/*  </div>*/}
        {/*</Tooltip>*/}

      </div>

      {/* 界面设置 */}
      <Divider className="divider">
        <SettingOutlined />
        界面设置
      </Divider>
      <div className="theme-item">
        <span>水印功能</span>
        <Switch
          checked={useSelector(getWaterMask)}
          onChange={e => {
            handleChangeSetUp(e,'watermark')
          }}
        />
      </div>
      <div className="theme-item">
        <span>面包屑导航</span>
        <Switch
          checked={useSelector(getBreadCrumb)}
          onChange={e => {
            handleChangeSetUp(e,'breadcrumb')
          }}
        />
      </div>
      <div className="theme-item">
        <span>标签栏</span>
        <Switch
          checked={useSelector(getTab)}
          onChange={e => {
            handleChangeSetUp(e,'tab')
          }}
        />
      </div>

    </Drawer>
  )
}

Theme.defaultProps = {
  visible:false
}
export default Theme
