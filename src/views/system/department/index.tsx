//部门管理页
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
const Department = () => {
  const navigate = useNavigate()
  return (
    <div>部门管理
      <Button type="primary">Primary Button</Button>
      <button onClick={() => navigate('/home/index/details')}>跳转111详情</button>
    </div>
  )
}

export default  Department;
