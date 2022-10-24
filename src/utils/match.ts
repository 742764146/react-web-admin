import {useLocation} from 'react-router-dom'
const matchRoute = (url:string) => {
  const location = useLocation()
  if(location?.pathname === url){
    return true
  }
  return false
}
export default matchRoute
