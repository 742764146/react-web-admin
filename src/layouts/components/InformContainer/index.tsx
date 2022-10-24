/**
 * 通知容器
 * @constructor
 */
import { useState } from 'react'
import { Button, Drawer, Avatar } from 'antd'
import { MailFilled } from '@ant-design/icons'
import './index.less'

interface Unread {
  title: string // 标题
  date: string // 时间
  status: boolean // 是否阅读
  id: number
}
interface InformContainerProps
  extends React.HTMLAttributes<HTMLElement> {
  visible: boolean
  setVisible: Function
}
const InformContainer = (props: InformContainerProps) => {
  const { visible, setVisible } = props
  const [unread, setUnread] = useState<Unread[]>([
    {
      title: '你收到14份新周报',
      date: '2022年10月12日',
      status: false,
      id: 1
    },
    {
      title: '你收到14份新周报',
      date: '2022年10月12日',
      status: true,
      id: 2
    },
    {
      title: '你收到14份新周报',
      date: '2022年10月12日',
      status: false,
      id: 3
    },
    {
      title: '你收到14份新周报',
      date: '2022年10月12日',
      status: false,
      id: 4
    },
    {
      title: '你收到14份新周报',
      date: '2022年10月12日',
      status: false,
      id: 5
    },
    {
      title: '你收到14份新周报',
      date: '2022年10月12日',
      status: false,
      id: 6
    },
    {
      title: '你收到25份新周报',
      date: '2022年11月12日',
      status: false,
      id: 7
    }
  ])
  /**
   * 选择的通知
   * @param {number} id 通知id
   */
  const handleSelectInfo = (id: number) => {
    unread.forEach((ele) => {
      if (ele.id === id) {
        ele.status = true
      }
    })
    setUnread([...unread])
  }
  /**
   * 通知数据列表
   * @returns React.HTMLAttributes<HTMLElement>
   */
  const generateInfoEle = () => {
    return unread.map((item: Unread) => {
      return (
        <div
          className={
            item.status
              ? 'inform-item inform-item-select'
              : 'inform-item'
          }
          key={item.id}
          onClick={() => handleSelectInfo(item.id)}
        >
          <div className="inform-item-logo">
            <MailFilled className="inform-item-logo-icon" />
          </div>
          <div className="inform-item-desc">
            <div className="inform-item-desc-title">
              {item.title}
            </div>
            <div className="inform-item-desc-date">
              {item.date}
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div>
      <Drawer
      placement="right"
      closable={false}
      onClose={() => setVisible(false)}
      open={visible}
      className="inform"
      zIndex={9999}
      style={{ top: '58px' }}
    >
      {generateInfoEle()}
    </Drawer>
    </div>
  )
}
export default InformContainer
