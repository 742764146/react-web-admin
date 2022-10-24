/**
 * logo容器
 * @constructor
 */
import logo from "@/assets/img/logo.png"
import React, { useEffect, useState } from 'react'
import "./index.less"
interface LogoContainerProps extends React.HTMLAttributes<HTMLElement> {
  collapsed: boolean
  isSmall:boolean
  navigationMode:number
}
const LogoContainer = (props:LogoContainerProps) => {
  const {collapsed,isSmall,navigationMode} = props
  const [logoClass, setLogoClass] = useState<string>(navigationMode === 1 ? 'logo':'logo logo-top')
  useEffect(() => {
      if(navigationMode === 1){
        setLogoClass('logo')
      } else if(navigationMode === 2 && isSmall){
        setLogoClass('logo')
      } else if(navigationMode === 2){
        setLogoClass('logo logo-top')
      }
  },[isSmall,navigationMode])
  return (
    <div className={logoClass} >
      <img src={logo} alt="logo" className="logo-img" />
      { !collapsed && !isSmall  &&<h2 className="logo-text">通用管理后台</h2>  }
      { isSmall  &&<h2 className="logo-text">通用管理后台</h2>  }
    </div>
  )
}

export default  LogoContainer
