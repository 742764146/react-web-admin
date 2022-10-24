namespace ReqRes {
  /**
   * 定义接口返回的固定格式
   */
  export interface ResponseResult<T = any> {
    [propName: string]: T
  }
}
