
import { Outlet } from "react-router-dom";
import matchRoute from "@/utils/match"


interface LevelLayoutProps extends React.HTMLAttributes<HTMLElement> {
  pathName: string 
  children:any
}

/**
 * 多层级路由容器
 * @param {string} pathName 二级路由 
 * @param  children 二级路由页面
 * @returns {HTMLElement}   页面
 */
const LevelLayout = (props: LevelLayoutProps) => {
  const {pathName,children} = props
  return (
    <>
        {/*匹配二级路由*/}
        {matchRoute(pathName) && children}
        {/*占位符，匹配三级路由*/}
        <Outlet></Outlet>
    </>  
  )
}

export default LevelLayout