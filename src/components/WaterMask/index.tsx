/**
 * 水印功能
 * @constructor
 */
import createWaterMaskImg from "@/utils/waterMask"
import "./index.less"
import { useEffect,useRef } from 'react'
import moment from 'moment'
const WaterMask = () => {
  const waterMask = useRef<any>(null)

  useEffect(() => {
    setWaterMask()
    // window.onresize = () => {
    //   const width = window.innerWidth
    //     || document.documentElement.clientWidth
    //     || document.body.clientWidth;
    //   console.log(width)
    // }
  },[])
  const setWaterMask = () => {
    const loginTime = moment().format("MM-DD HH:mm:ss");
    const src = createWaterMaskImg('tony', loginTime);
    waterMask.current.style.background = `url(${src})`;
  }
  return (
    <>
      <div className="water-mask" ref={waterMask}></div>
    </>
  )
}

export default WaterMask;
