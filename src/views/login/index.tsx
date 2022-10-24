///<reference path="../../model/route.ts"/>
//登录页
import { useState } from 'react'
import { Button, message } from 'antd'
import KeyboardEventHandler from 'react-keyboard-event-handler';
// import PropTypes from 'prop-types' // 引入依赖
import './index.less'
import pwd from '@/assets/img/pwd.png'
import accountImg from '@/assets/img/account.png'
import codeImg from "@/assets/img/code.png"
import {routerArray,rootRouter,errorRouter} from "@/router/routes"
import trees from "@/utils/mockRoute"
import {filterAsyncRoute} from "@/utils/route"
import { useNavigate } from "react-router-dom";
import { gerenateRoutePage } from "@/utils/common"
import { useDispatch } from 'react-redux';
import { setToken,setLoading } from '@/store/action';
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formLoading, setFormLoading] = useState<boolean>(false)
  const [account, setAccount] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [code, setCode] = useState<string>('')
  const [accountErrorMsg, setAccountErrorMsg] =
    useState<string>('账号格式错误')
  const [passwordErrorMsg, setPasswordErrorMsg] =
    useState<string>('密码不能为空')
  const [codeErrorMsg, setCodeErrorMsg] =
    useState<string>('验证码不能为空')
  const identifyCode = '12346666'

  /**
   * 输入账号
   */
  const handleInputAccount = () => {
    const accountData = document.getElementById(
      'account'
    ) as HTMLInputElement
    const form_underline_account = document.getElementById(
      'form_underline_account'
    ) as HTMLInputElement
    const accErrorMsg = document.getElementById(
      'accErrorMsg'
    ) as HTMLInputElement
    setAccount(accountData.value.trim())
    if (accountData.value.trim() === '') {
      form_underline_account.classList.add(
        'form_underline_error'
      )
      accErrorMsg.classList.add('errorMsg_show')
      return false
    } else {
      form_underline_account.classList.remove(
        'form_underline_error'
      )
      accErrorMsg.classList.remove('errorMsg_show')
      return true
    }
  }
  /**
   * 输入密码
   */
  const handleInputPassword = () => {
    const passwordData = document.getElementById(
      'password'
    ) as HTMLInputElement
    const form_underline_password = document.getElementById(
      'form_underline_password'
    ) as HTMLInputElement
    const pwdErrorMsg = document.getElementById(
      'pwdErrorMsg'
    ) as HTMLInputElement
    setPassword(passwordData.value.trim())
    if (passwordData.value.trim() === '') {
      form_underline_password.classList.add(
        'form_underline_error'
      )
      pwdErrorMsg.classList.add('errorMsg_show')
      return false
    } else {
      form_underline_password.classList.remove(
        'form_underline_error'
      )
      pwdErrorMsg.classList.remove('errorMsg_show')
      return true
    }
  }
  /**
   * 输入验证码
   */
  const handleInputCode = () => {
    const codeData = document.getElementById(
      'code'
    ) as HTMLInputElement
    const form_underline_code = document.getElementById(
      'form_underline_code'
    ) as HTMLInputElement
    const codeErrorMsg = document.getElementById(
      'codeErrorMsg'
    ) as HTMLInputElement
    setCode(codeData.value.trim())
    if (codeData.value.trim() === '') {
      form_underline_code.classList.add(
        'form_underline_error'
      )
      codeErrorMsg.classList.add('errorMsg_show')
      return false
    } else {
      form_underline_code.classList.remove(
        'form_underline_error'
      )
      codeErrorMsg.classList.remove('errorMsg_show')
      return true
    }
  }
  //键盘事件
  const handleKeyUp = (e:any) => {
    handleLogin()
  }
  //登录
  const handleLogin = async () => {
    console.log('登录')

    if (handleInputAccount() && handleInputPassword() && handleInputCode()) {
      setFormLoading(true)
      const obj = {
        username: account,
        password: password
      }
      setTimeout(async() => {
        message.success("登录成功");
        setFormLoading(false)
        const routeData = await filterAsyncRoute(trees,routerArray)
        await rootRouter.push(...routeData,...errorRouter)
        const firstPage = gerenateRoutePage(routeData).length > 0 ? gerenateRoutePage(routeData)[0] : ''
        navigate(firstPage)
        dispatch(setToken('111asda2324hdhfj'))
        // setRouteListData([...routeData,...errorRouter])
        dispatch(setLoading(true))
      },1000)
    } else {
      setFormLoading(false)
      if(!handleInputAccount()){
        message.error(accountErrorMsg)
        return
      }
      if(!handleInputPassword()){
        message.error(passwordErrorMsg)
        return
      }
      if(!handleInputCode()){
        message.error(codeErrorMsg)
      }
    }
  }
  return(
    <div className="login">
      <div className="login_form">
        <div className="form_line"></div>
        <h1 className="form_title">通用管理后台</h1>
        <form className="form" onKeyUp={() => handleKeyUp}>
          <label htmlFor="account" className="form_account">
            <img src={accountImg} />
          <KeyboardEventHandler handleKeys={['enter']} onKeyEvent={handleKeyUp}>
            <input
              type="text"
              placeholder="请输入账号"
              id="account"
              value={account}
              onChange={() => {
                handleInputAccount()
              }}
              required
              title="请输入账号"
            />
            <div
              className="form_underline"
              id="form_underline_account"
            ></div>
          </KeyboardEventHandler>
            <span className="errorMsg" id="accErrorMsg">
              {accountErrorMsg}
            </span>

          </label>
          <label
            className="form_password"
            htmlFor="password"
          >
            <img src={pwd} />
            <KeyboardEventHandler handleKeys={['enter']} onKeyEvent={handleKeyUp}>
              <input
                type="password"
                placeholder="请输入密码"
                id="password"
                required
                value={password}
                onChange={() => {
                  handleInputPassword()
                }}
                title="请输入密码"
              />
              <div
                className="form_underline"
                id="form_underline_password"
              ></div>
            </KeyboardEventHandler>
            <span className="errorMsg" id="pwdErrorMsg">
              {passwordErrorMsg}
            </span>
          </label>
          <label
            className="form_code"
            htmlFor="code"
          >
            <img src={codeImg} />
            <KeyboardEventHandler handleKeys={['enter']} onKeyEvent={handleKeyUp}>
              <input
                type="text"
                placeholder="请输入验证码"
                id="code"
                required
                value={code}
                onChange={() => {
                  handleInputCode()
                }}
                title="请输入验证码"
              />
              {/*<img src={}/>*/}
              <div
                className="form_underline"
                id="form_underline_code"
              ></div>
            </KeyboardEventHandler>
            <span className="errorMsg" id="codeErrorMsg">
              {codeErrorMsg}
            </span>
          </label>
          <div>
            <Button
              type="primary"
              className="form_btn"
              loading={formLoading}
              onClick={() => {
                handleLogin()
              }}
            >
              登录
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
