///<reference path="../../model/store/config.ts"/>
import * as ActionTypes from '@/store/config/actionTypes'

/**
 * 设置水印
 * @param {boolean} waterMask
 */
export const setWaterMask = (waterMask:boolean) => ({
  type:ActionTypes.WATER_MASK,
  waterMask
})

/**
 * 设置面包屑
 * @param {boolean} breadCrumb
 */
export const setBreadCrumb = (breadCrumb:boolean) => ({
    type: ActionTypes.BREAD_CRUMB,
    breadCrumb
})

/**
 * 设置标签栏
 * @param {boolean} tab
 */
export const setTab = (tab:boolean) => ({
  type:ActionTypes.TAB,
  tab
})

/**
 * 设置主题色
 * @param {string} primaryColor
 */
export const setPrimaryColor = (primaryColor:string) => ({
  type:ActionTypes.PRIMARY_COLOR,
  primaryColor
})

/**
 * 设置导航模式
 * @param {ModelStoreConfig.Navigation} navigationMode
 */
export const setNavigationMode = (navigationMode:ModelStoreConfig.Navigation) => ({
  type:ActionTypes.NAVIGATION_MODE,
  navigationMode
})
