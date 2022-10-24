/**
 * 头部容器右侧
 * @constructor
 */
import {
  DownOutlined,
  ExclamationCircleOutlined,
  FullscreenOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined
} from '@ant-design/icons'
import ScreenFull from 'screenfull'
import './index.less'
import {
  Avatar,
  Dropdown,
  Menu,
  message,
  Modal,
  Tooltip,
  Badge
} from 'antd'
import avatar from '@/assets/img/avatar.png'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken,setRouteList } from '@/store/action'

interface HeaderContainerRightProps
  extends React.HTMLAttributes<HTMLElement> {
  setVisible: Function
  userName: string
  navigationMode: number
  setVisibleInfo: Function
  visibleInfo: boolean
}

const HeaderContainerRight = (
  props: HeaderContainerRightProps
) => {
  const {
    setVisible,
    userName,
    navigationMode,
    setVisibleInfo,
    visibleInfo
  } = props
  const [rightClass, setRightClass] = useState<string>(
    navigationMode === 1
      ? 'layout_right'
      : 'layout_right layout_right_top'
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const screenFullToggle = () => {
    ScreenFull.toggle()
  }
  /**
   * 退出登录
   */
  const logout = () => {
    Modal.confirm({
      title: '温馨提示 🧡',
      icon: <ExclamationCircleOutlined />,
      content: '是否确认退出登录？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        dispatch(setToken(''))
        dispatch(setRouteList([]))
        message.success('退出登录成功！')
        navigate('/login')
      }
    })
  }
  //个人按钮
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <span className="dropdown-item">首页</span>
        },
        {
          key: '2',
          label: (
            <span className="dropdown-item">个人信息</span>
          )
        },
        {
          key: '3',
          label: (
            <span className="dropdown-item">修改密码</span>
          )
        },
        {
          type: 'divider'
        },
        {
          key: '4',
          label: (
            <span className="dropdown-item">退出登录</span>
          ),
          onClick: logout
        }
      ]}
    ></Menu>
  )
  useEffect(() => {
    switch (navigationMode) {
      case 1:
        setRightClass('layout_right')
        break
      case 2:
        setRightClass('layout_right layout_right_top')
        break
    }
  }, [navigationMode])
  return (
    <div className={rightClass}>
      <Tooltip placement="bottom" title="全屏">
        <span
          className="fullscreen"
          onClick={() => screenFullToggle()}
        >
          <FullscreenOutlined className="fullscreen-outlined" />
        </span>
      </Tooltip>
      <Tooltip placement="bottom" title="自定义">
        <span
          className="zhuti"
          onClick={() => setVisible(true)}
        >
          <i className="icon-style iconfont icon-zhuti" />
        </span>
      </Tooltip>
      <Tooltip placement="bottom" title="通知">
        <span
          className="info"
          onClick={() => setVisibleInfo(!visibleInfo)}
        >
          <Badge dot={true} size="small">
            <BellOutlined className="info-bellOutlined" />
          </Badge>
        </span>
      </Tooltip>
      <span className="username">员工：{userName}</span>
      <Dropdown overlay={menu} trigger={['hover']}>
        <Avatar size="large" src={avatar} />
      </Dropdown>
    </div>
  )
}

export default HeaderContainerRight
