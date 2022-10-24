import {
  Layout
} from 'antd'
import React from 'react'
import WaterMask from '@/components/WaterMask'
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
import { getWaterMask } from '@/store/getters'
import "./index.less"
const { Content } = Layout
const ContentContainer = () => {
  return (
    <Content
      className='site-layout-background'
      style={{
        margin: '20px 16px',
        padding: '24px',
        minHeight: '280px'
      }}
    >
      <Outlet></Outlet>
      {useSelector(getWaterMask) && <WaterMask />}
    </Content>
  )
}

export default  ContentContainer
