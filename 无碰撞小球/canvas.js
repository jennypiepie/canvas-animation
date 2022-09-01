/**
 * 产生随机整数 
 */

function randomIntFromRange(low,high) {
    return Math.floor(Math.random() * (high - low + 1) + low)
}

/**
 * 产生随机浮点数 
 */

function randomFloatFromRange(low, high) {
    return Math.random() * (high - low + 1) + low
}

/**
 *产生随机颜色
 */

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

/**
 *两个点的距离
 */

function getDistance(x1, y1, x2, y2) {
    let dx = x1 - x2
    let dy = y1 - y2
    return Math.sqrt(dx * dx + dy * dy)
}

let canvas = document.getElementById('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// 绘制上下文
let ctx = canvas.getContext('2d')

window.addEventListener('resize', function (event) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    init()
})

let maxRadius = 40

let colorArray = [
    '#4CBF88',
    '#F2B134',
    '#6F4A70',
    '#FF6275',
    '#00B5C4'
]

function Particle(x, y, dx, dy, radius, color) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color

    this.draw = function () {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, flase)
        ctx.fill()
        ctx.closePath()
    }

    this.update = function () {
        //如果超出边界则往反方向移动
        if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius + this.dx < 0) {
            this.dx = - this.dx
        }
        if (this.y + this.radius + this.dy > canvas.height || this.y - this.radius + this.dy < 0) {
            this.dy = - this.dy
        }
        this.x += this.dx
        this.y += this.dy

        this.draw()
    }
}


let ballArray 

function init() {
    ballArray = []
    for (let i = 0; i < 200; i++){
        let radius = randomFloatFromRange(15, 20)
        let x = randomIntFromRange(radius, canvas.width - radius)
        let y = randomIntFromRange(radius, canvas.height - radius)

        //防止初始化重叠
        for (let j = 0; j < ballArray.length; j++){
            if (getDistance(x, y, ballArray[j].x, ballArray[j].y) <= radius + ballArray[j].radius) {
                let radius = randomFloatFromRange(15, 20)
                let x = randomIntFromRange(radius, canvas.width - radius)
                let y = randomIntFromRange(radius, canvas.height - radius)
                j = -1
            }
        }
        let dx = randomFloatFromRange(-1, 1)
        let dy = randomFloatFromRange(-1, 1)
        let color = randomColor(colorArray)
        ballArray.push(new Particle(x, y, dx, dy, radius, color))
    }
}

//动画
function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    for (let b of ballArray) {
        b.update()
    }
}