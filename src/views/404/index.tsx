///<reference path="../../model/route.ts"/>
import { Button, Result } from 'antd'
import { useNavigate } from "react-router-dom";
import {  routerArray } from '@/router/routes'
import {filterAsyncRoute} from "@/utils/route"
import trees from "@/utils/mockRoute"
import {gerenateRoutePage} from "@/utils/common"
import {getCurrentPath} from '@/store/getters'
import {useSelector} from 'react-redux'
const NoFoundPage = () => {
  const navigate = useNavigate()
  const oldAddress = useSelector(getCurrentPath)
  const toLink = () => {
    const routeData = filterAsyncRoute(trees,routerArray)
    // 获取上一次能够正常访问页面的链接， 如不满足则打开路由中的第一页 ， 再不满足就跳转回登录页
    const pageLink = gerenateRoutePage(routeData).length > 0 ?
      gerenateRoutePage(routeData).indexOf(oldAddress) > - 1 ? oldAddress:
        gerenateRoutePage(routeData)[0] : '/login'
    navigate(pageLink)
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="页面访问错误"
      extra={
        <Button
          type="primary"
          onClick={toLink}
        >
          回到上一页
        </Button>
      }
    />
  )
}
export default NoFoundPage
