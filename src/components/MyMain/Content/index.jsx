import React from 'react';
import "./index.css"
import firework from  "./fireworks"
import "./fireworks.css"

const allContent = [
    [
        "我们的故事从2020年开始...",
        "那年夏天，我们相识于网络",
        "我在西安、你在渭南",
        "我大一、你高三..."
    ],
    [
        "当时你临近高考",
        "只有晚上才能找我一下",
        "我也不知道从何时开始喜欢上你",
        "大概是那次",
        "你想睡觉的时候听历史笔记",
        "我抽出一下午的时间",
        "给你念、录好音"
    ],
    [
        "还记得有一次",
        "你突然让我读一下‘nanami’",
        "你还截屏保存了，录下了我的声音",
        "后来我才知道",
        "这是一部动漫里女主的名字啊",
        "所以...你当时在暗示我",
        "我是你的巴卫，你是我的奈奈生"
    ],
    [
        "后来啊，你高考结束啦",
        "当时我们约定，等你报完志愿",
        "我们就面基...",
    ],
    [
        "终于等到那一天，7月22日",
        "我们约定下午6点在大雁塔地铁站见",
        "我提前半小时到了",
        "坐在长椅上",
        "目光在人群中寻找我的公主",
    ],
    [
        "终于...",
        "你身穿蓝色的洛丽塔裙子，惊艳了我",
        "心跳加速的我却在见到你后平静了下来",
        "之后的每次见面",
        "我都是见你之前很紧张，到处找你",
        "见到你后，却立马变得很惬意、放松",
    ],
    [
        "大雁塔人很多",
        "我打算带着你绕一圈",
        "路上我也没敢牵你的手",
        "我数次扭头看风景，实则是在悄悄地看你",
        "我没有单独跟女生出去游玩过",
        "那时候，我在想...",
        "待会儿该怎么向你表白呢？"
    ],
    [
        "有一幅画面我至今都记得",
        "你在前面给表演的人拍照",
        "然后你扭头对我笑了笑",
        "我瞬间有一股错觉",
        "我们好像是已经在一起很久了的情侣呀",
    ],
    [
        "夜晚的大雁塔很美",
        "我们走在回去的路上",
        "我突然牵住你的手",
        "你好像低头笑了下，又好像没有",
        "我对你说：做我女朋友吧！",
        "你：嗯！"
    ],
    [
        "没想到，我们俩走着走着就成为了情侣",
        "后来我在手机备忘录里记到：",
        "“2020.7.22,20:00-21:00”",
        "“我们第一次见面”",
        "“然后，走着走着，就在一起了...”"
    ],
    [
        "之后，我们趁着还没有开学",
        "我们一起去了很多地方",
        "我们在回民街附近的爱情博物馆里",
        "一起写了一张卡片并挂在那里：",
        "“奇奇❤璇璇，永远！”"
    ],
    [
        "异地恋很苦...",
        "我很怕因为开学，半年见不到面",
        "我们会因此分手...",
        "我当时在知乎上搜了很多：",
        "“异地恋如何保鲜”",
        "但我的担忧是多余的",
        "我们每天晚上都连麦，连一整晚",
        "这一习惯持续到了现在",
        "所以只要保持联络，就不怕异地！"
    ],
    [
        "过去的一年多里",
        "我们实际待在一起的时间连半个月都不到",
        "见面次数不超过20次",
        "我们的感情也迈过了最初的新鲜感",
        "吵架频率增加了...",
    ],
    [
        "但我已经适应了你，并且依赖你",
        "每天晚上不和你连麦说说话，我就很难受",
        "所以你每次都说我，道歉最积极"
    ],
    [
        "我们相识于疫情，恋爱在疫情",
        "虽曾计划着去成都旅游",
        "但也因为疫情被迫取消",
        "还记得去年的冬天，我坐高铁去找你",
        "结果一下高铁就被拦住去做核酸",
        "当时好怕被隔离起来，见不到你",
    ],
    [
        "你说你经常在校园里看到一对对情侣",
        "你好羡慕他们，我何尝不是",
        "异地恋的我们，宛如单身一样",
        "遇到一些事情，只能自己去解决",
        "我不在你身边，我帮不了你",
    ],
    [
        "记得上个月，你说下雨了，你回不去学校",
        "我不能说我去接你，因为我做不到...",
        "我能感受到你在抱怨...",
        "我当时说:",
        "会有那么一天",
        "下雨了，我开车去你公司接你回家",
    ],
    [
        "我憧憬着我们的未来",
        "等我工作了，就在外面租一个房子",
        "然后等你毕业，我们就住一起",
        "一起在一座城市里工作、",
        "一起周末在家里看电视、",
        "一起养小猫小狗小金鱼、",
        "一起热爱生活的每一天!",
    ],
    [
        "现在",
        "2021年的最后一刻",
        "我请你一起看烟花！",
        "2022新年快乐！"
    ]

]

const musicList = [
    "/bgm/汪苏泷,By2%20-%20有点甜.mp3",
    "/bgm/花粥 - 纸短情长.mp3"
]

const Content = () => {

    // 文字出现时间
    const duringTime = 3

    const [content, setContent] = React.useState([])
    const [show, setShow] = React.useState("hidden")
    const [rotateMusic, setRotateMusic] = React.useState(false)
    const [banziNum, setBanZiNum] = React.useState(Array.from({length: 20}, () => 1))
    const [contentIndex, setContentIndex] = React.useState(0)

    const startMusic = () => {
        let music = document.getElementById("music");
        if (rotateMusic) {
            setRotateMusic(false)
            music.pause()
            return
        }
        setRotateMusic(true)
        music.play()
        music.volume = 0.8
        setShow("")
    }

    const nextPage = () => {
        setContent(() => {
            if (contentIndex === allContent.length) {
                setTimeout(()=>{
                    firework()
                }, 100)
                return null
            }
            setContentIndex(contentIndex + 1)
            return allContent[contentIndex]
        })
    }

    React.useEffect(() => {
        setContent(() => {
            setContentIndex(contentIndex + 1)
            return allContent[contentIndex]
        })
        let time = setInterval(() => {
            let music = document.getElementById("music");
            if (music.currentTime >= music.duration) {
                music.src = musicList[1];
                music.play()
                music.volume = 0.8
            }
        }, 1000)
        return () => {
            clearInterval(time)
        }
    }, [])

    return (
        <div>
            <div onClick={startMusic} className="music-switch">
                <i className="iconfont icon-yinle"
                   style={{
                       color: "red",
                       fontSize: "3rem",
                       display: "block",
                       animationName: "rotate-music",
                       animationDuration: `${rotateMusic ? "10s" : ""}`,
                       animationIterationCount: "infinite",
                       animationTimingFunction: "linear",
                   }}
                />
            </div>
            <audio id="music">
                <source src={musicList[0]} type="audio/mpeg"/>
            </audio>
            <div key={Math.random()} className="my-content" style={{visibility: show}}>
                {
                    content ? content.map((item, index) => {
                        return <div key={index}>{item}</div>
                    }) : null
                }
                {
                    content ? banziNum.map((item, index) => {
                        return <div key={index + "s"}
                                    className="banzi"
                                    style={{
                                        top: `${3 * index}rem`,
                                        animation: `show-content ${duringTime}s`,
                                        animationFillMode: `forwards`,
                                        animationDelay: `${index * duringTime}s`,
                                        animationTimingFunction: "cubic-bezier(0.1,0.15,0.1,0.15)"
                                    }}/>
                    }) : <canvas/>
                }
                <div className="down-arrow" onClick={nextPage} style={{display: content ? "" : "none"}}>
                    <i className="iconfont icon-downarrow"/>
                </div>
            </div>
        </div>
    );
}

export default Content;