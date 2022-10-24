/**
 * 获取水印
 * @param state
 */
export const getWaterMask = (state:any) => state.config.waterMask

/**
 * 获取面包屑
 * @param state
 */
export const getBreadCrumb = (state:any) => state.config.breadCrumb

/**
 * 获取标签栏
 * @param state
 */
export const getTab = (state:any) => state.config.tab

/**
 * 获取主题色
 * @param state
 */
export const getPrimaryColor = (state:any) => state.config.primaryColor

/**
 * 获取导航模式
 * @param state
 */
export const getNavigationMode = (state:any) => state.config.navigationMode
