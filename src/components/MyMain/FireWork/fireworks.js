export default () => {
    // 获取画笔
    const ctx = document.querySelector('canvas').getContext('2d')
    // 火花
    const sparks = []
    // 烟花
    const fireworks = []
    // 渲染烟花
    render()

    // =========================================================================================================

    // 渲染
    function render() {
        // 每xxx秒渲染一次， 播放动画
        setTimeout(render, 1000 / 40)
        // 填充颜色
        ctx.save()
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        // 绘制填充矩形
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        // 遍历每一个烟花
        for (const firework of fireworks) {
            if (firework.dead) continue
            firework.move()
            firework.draw()
        }
        // 遍历每一个火花
        for (const spark of sparks) {
            if (spark.dead) continue
            spark.move()
            spark.draw()
        }

        if (Math.random() < 0.1) {
            fireworks.push(new Firework())
        }
        ctx.restore()
    }

    // 火花
    function Spark(x, y, color) {
        this.x = x
        this.y = y
        this.dir = Math.random() * (Math.PI * 2)
        this.dead = false
        this.color = color
        this.speed = Math.random() * 3 + 3;
        this.walker = new Walker({radius: 20, speed: 0.001})
        this.gravity = 0.1
        this.dur = this.speed / 0.065
        this.move = function () {
            this.dur--
            if (this.dur < 0) this.dead = true

            if (this.speed < 0) return
            if (this.speed > 0) this.speed -= 0.1
            const walk = this.walker.step()
            this.x += Math.cos(this.dir + walk) * this.speed
            this.y += Math.sin(this.dir + walk) * this.speed
            this.y += this.gravity
            this.gravity += 0.025

        }
        // 火花大小
        this.draw = function () {
            drawCircle(this.x, this.y, (Math.random() + 1), this.color)
        }
    }

    function Firework(x, y) {
        this.xmove = new Walker({radius: 10, speed: 0.5})
        this.x = x || Math.random() * ctx.canvas.width
        this.y = y || ctx.canvas.height
        this.height = Math.random() * ctx.canvas.height / 2
        this.dead = false
        this.color = randomColor()

        this.move = function () {
            if (this.y > this.height) this.y -= 2;
            else this.burst()

        }
        this.draw = function () {
            drawCircle(this.x, this.y, 1, this.color)
        }
        // 爆炸效果
        this.burst = function () {
            this.dead = true
            if (Math.random() < 0.025) {
                let i = 500;
                while (i--) sparks.push(new Spark(this.x, this.y, randomColor()))
                return
            }
            if (Math.random() < 0.3) {
                let i = 100;
                while (i--) sparks.push(new Spark(this.x, this.y, this.color))
                return
            }
            let i = 50;
            while (i--) {
                sparks.push(new Spark(this.x, this.y, this.color))
            }
        }
    }

    // 画圈圈
    function drawCircle(x, y, radius, color) {
        color = color || '#FFF'
        ctx.fillStyle = color
        ctx.fillRect(x - radius / 2, y - radius / 2, radius, radius)
    }

    //  随机颜色
    function randomColor() {
        return ['yellow', '#1112ff', '#ff0cb8', '#ff1107', '#29f613', '#ffd966'][Math.floor(Math.random() * 6)];
    }

    // 移动
    function Walker(options) {
        // 下一步移动到哪儿
        this.step = function () {
            // 目的地
            this.direction = Math.sign(this.target) * this.speed
            this.value += this.direction
            this.target
                ? this.target -= this.direction
                : (this.value)
                ? (this.wander)
                    ? this.target = this.newTarget()
                    : this.target = -this.value
                : this.target = this.newTarget()
            return this.direction
        }

        this.newTarget = function () {
            return Math.round(Math.random() * (this.radius * 2) - this.radius)
        }

        this.start = 0
        this.value = 0
        this.radius = options.radius
        this.target = this.newTarget()
        this.direction = Math.sign(this.target)
        this.wander = options.wander
        this.speed = options.speed || 1
    }
}