// 1.获取canvas元素
let canvas = document.getElementById('myCanvas')
// 2.创建绘图上下文(画笔)
let ctx = canvas.getContext('2d')
// 3.描述绘制对象
ctx.fillStyle = "pink"
// 4.绘制图形
ctx.fillRect(0, 0, 150, 75)

// 绘制线
// ctx.moveTo(10, 10)
// ctx.lineTo(100, 100)
// ctx.stroke()

ctx.arc(50, 50, 30, 0, Math.PI,true)
// 圆心坐标，半径，起始角度，结束角度,false顺时针(默认)，true逆时针
ctx.stroke()

