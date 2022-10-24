//基础
declare namespace ModelBase {
  //公共返回数据
  interface CommonResponse {
    code: string //响应码,0:成功,否则异常
    msg: string //响应信息
  }
}
