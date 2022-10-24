/**
 * 页面水印功能
 * @param {String} name 名字
 * @param {String} time 时间
 * @param {String} color 颜色 默认"#ddd"
 * @param {String} font 字体 默认 "16px Arial"
 * @returns {string} 返回base64
 */

function createWaterMaskImg(name:string, time:string, color = "#ddd", font = "16px Arial") {
  let canvas = document.createElement("canvas") as HTMLCanvasElement;
  //设置canvas宽高
  // canvas.width = 300;
  canvas.width = 250;
  // canvas.height = 150;
  canvas.height = 140;
  //获取canvas上下文
  let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  //旋转
  ctx.rotate(50);
  //设置字体
  ctx.font = font;
  //设置颜色
  ctx.fillStyle = color;
  //获取图片对象
  let image = new Image() as  HTMLImageElement;
  let img = document.createElement("img");
  let str = `${name} ${time}`;
  //生成文字
  ctx.fillText(str, 0, 80);
  //  生成base64
  image = canvas.toDataURL("image/png") as any;
  //渲染图片
  ctx.drawImage(img, 0, 0);
  return image;
}
export default createWaterMaskImg
