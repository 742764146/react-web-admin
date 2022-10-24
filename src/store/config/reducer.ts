///<reference path="../../model/store/config.ts"/>
import * as actionTypes from '@/store/config/actionTypes'
import * as globalConfig from "@/config/global_config"
interface ModelStoreConfig {
  waterMask:boolean, //水印
  breadCrumb:boolean, // 面包屑
  tab:boolean, //标签栏
  diyLayout:boolean //自定义布局
  openColor:boolean // 自定义颜色
  primaryColor:string // 主题色
  navigationMode:ModelStoreConfig.Navigation // 导航模式
}

const config:ModelStoreConfig = {
  waterMask:globalConfig.waterMask,
  breadCrumb:globalConfig.breadCrumb,
  tab:globalConfig.tab,
  diyLayout:globalConfig.diyLayout,
  openColor:globalConfig.openColor,
  primaryColor:globalConfig.primaryColor,
  navigationMode:globalConfig.navigationMode
}

export default function reducer(state = config,action:any){
  const {type,waterMask,breadCrumb,tab,primaryColor,navigationMode} = action

  switch (type) {
    case actionTypes.WATER_MASK:
      return {...state,waterMask}
    case actionTypes.BREAD_CRUMB:
      return {...state,breadCrumb}
    case actionTypes.TAB:
      return {...state,tab}
    case actionTypes.PRIMARY_COLOR:
      return {...state,primaryColor}
    case actionTypes.NAVIGATION_MODE:
      return {...state,navigationMode}
  }
  return state
}
