import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks"
import LevelLayout from "@/components/LevelLayout"
const Home = () => {
  const navigate = useNavigate()
  const result = useAuth('edit')  
  const Layout = () => {
    return <div>
      home页面
      {result && <button onClick={() => navigate('/home/index/details')}>跳转111详情</button>}
    </div>
  }
  return (
    <LevelLayout pathName="/home/index">
      <Layout/>
    </LevelLayout>
  )
}

export default  Home
