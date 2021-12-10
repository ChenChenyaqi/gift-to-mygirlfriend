import React, {Fragment} from 'react';
import "./index.css"

import Letter from "../Letter";
import MyHeader from "../../MyHeader";
import FireWork from "../FireWork";

import zimeiguiPath from "./flowers/紫玫瑰.svg";
import taohuaPath from "./flowers/桃花.svg";
import huaba1Path from "./flowers/花瓣1.svg";
import huaba2Path from "./flowers/花瓣2.svg";
import huaba3Path from "./flowers/花瓣3.svg";
import catPath from "./flowers/猫.png";

const allContent = [
    [
        "我们的故事从2020年开始...",
        "那年夏天，我们相识于网络",
        "我在西安、你在渭南",
        "我大一、你高三..."
    ],
    [
        "当时你临近高考",
        "只有空闲时才能跟我聊会儿天",
        "我也不知道从何时开始喜欢上你",
        "大概是那次...",
        "你想睡觉的时候听历史笔记",
        "我便抽出一下午的时间",
        "给你念、录好音",
    ],
    [
        "还记得有一次",
        "你突然让我读一下‘nanami’",
        "你还录屏保存，录下了我的声音",
        "后来我才知道",
        "原来这是一部动漫里女主的名字啊",
        "所以...你当时在暗示我",
        "我是你的巴卫，你是我的奈奈生！"
    ],
    [
        "再后来，你高考结束啦",
        "我们当时约定，等你报完志愿",
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
        "你穿着蓝色的小裙子，惊艳了我",
        "心跳加速的我却在见到你后平静下来",
        "之后的每次见面",
        "我都是见你之前很紧张，到处找你",
        "见到你后，却立马变得很惬意、放松",
    ],
    [
        "大雁塔人很多",
        "我打算带着你绕一圈",
        "路上我也没敢牵你的手",
        "我多次扭头看风景",
        "其实是在悄悄地看你",
        "我没有单独跟女生出去玩过",
        "那时候，我在想...",
        "待会儿该怎么向你表白呢？"
    ],
    [
        "有一幅画面我至今都记得",
        "你在前面给表演的人拍照",
        "然后你扭头对我笑了笑",
        "我瞬间有一种错觉",
        "我们像是已经在一起很久了的情侣呀",
    ],
    [
        "夜晚的大雁塔很美",
        "我们走在回去的路上",
        "也许是时候了...",
        "我突然牵住你的手",
        "你好像害羞的笑了下，又好像没有",
        "我对你说：我们...在一起吧！",
        "你：嗯！",
        "..."
    ],
    [
        "没想到，我们俩走着走着就成为了情侣",
        "后来我在手机备忘录里写下：",
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
        "当时我好害怕被隔离起来，见不到你",
    ],
    [
        "你说你经常在校园里看到一对对情侣",
        "你好羡慕他们，我何尝不是呢？",
        "异地恋的我们，就像单身一样",
        "遇到一些事情，只能自己去解决",
        "我不在你身边，也帮不了你",
    ],
    [
        "记得上个月，你说下雨了，你回不了学校",
        "但我不能说我去接你，因为我做不到...",
        "我能感受到你在抱怨...",
        "我当时向你承诺:",
        "会等到那一天",
        "我给你发消息说：",
        "下雨了，我来接你回家！"
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
        "2022新年快乐！！！"
    ]
]

// const allContent = [
//     ["123"]
// ]

const Content = () => {

    // 文字出现时间
    const duringTime = 3
    // 控制音乐函数
    let switchMusic;

    // 显示的内容
    const [content, setContent] = React.useState(allContent[0])
    // 是否显示my-content
    const [show, setShow] = React.useState("none")
    // allContents的索引下标
    const [contentIndex, setContentIndex] = React.useState(0)
    // 是否显示 烟花
    const [showFireWork, setShowFireWork] = React.useState("unshow")
    // 是否发射烟花
    const [firework, setFireWork] = React.useState(false)


    // 总开关
    const start = () => {
        // 初始时，显示my-content
        setShow("")
        // 初始化播放音乐
        switchMusic()
    }

    // 点击下一页
    const nextPage = () => {
        // 更新下一页显示的内容
        setContent(() => {
            // 如果显示到头了
            // 播放烟花特效
            if (contentIndex === allContent.length - 1) {
                // 100毫秒后播放
                setTimeout(() => {
                    setFireWork(true)
                }, 100)
                setShow("none")
                // 显示烟花
                setShowFireWork("show")
                return null
            }
            // 内容索引自增
            setContentIndex(contentIndex + 1)
            // 返回下一个内容
            // 虽放在setContentIndex下面，但setContentIndex是异步方法，所以不影响此刻contentIndex的值
            return allContent[contentIndex + 1]
        })
    }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            {/*顶部，音乐*/}
            <MyHeader switchMusic={(e) => switchMusic = e}/>

            {/*信封*/}
            <Letter start={start}/>

            {/*主内容区*/}
            <div key={content} className="my-content" style={{display: show}}>
                {
                    // 显示内容
                    content ? content.map((item, index) => {
                        return <div key={index}
                                    style={{
                                        borderTopLeftRadius: index === 0 ? "15px" : "",
                                        borderTopRightRadius: index === 0 ? "15px" : "",
                                        borderBottomLeftRadius: index === content.length - 1 ? "15px" : "",
                                        borderBottomRightRadius: index === content.length - 1 ? "15px" : "",
                                        border: "",
                                        zIndex: 2
                                    }}
                        >{item}</div>
                    }) : null
                }

                {/*玫瑰花和桃花*/}
                <img src={zimeiguiPath} className="zimeigui" alt="玫瑰花"/>
                <img src={taohuaPath} className="taohua" alt="桃花"/>

                {/*花瓣*/}
                {
                    content ? content.map((item, index) => {
                        const huabans = [huaba1Path, huaba2Path, huaba3Path]
                        const i = Math.floor(Math.random() * 3)
                        return <img key={index} src={huabans[i]} className="huaban" alt="花瓣" style={{
                            left: Math.random() * 90 + "%",
                            top: Math.random() * 60 + "%",
                            width: i === 0 ? 0.8 + "rem" : i + "rem",
                        }}/>
                    }) : null
                }

                {/*猫*/}
                <img src={catPath} className="cat" alt="猫"/>
                <div className="board-wrapper" style={{height: content ? content.length * 3 + "rem" : ""}}>
                    {
                        // 显示遮板
                        content ? content.map((item, index) => {
                            return <div key={index + "s"}
                                        className="board"
                                        style={{
                                            top: `${3 * index}rem`,
                                            animation: `show-board ${duringTime}s`,
                                            animationFillMode: `forwards`,
                                            animationDelay: `${index * duringTime}s`,
                                            animationTimingFunction: "cubic-bezier(0.1,0.15,0.1,0.15)",
                                        }}/>
                        }) : null
                    }
                </div>

                {/*下一页按钮*/}
                <div className="down-arrow" onClick={nextPage} style={{display: content ? "" : "none"}}>
                    <i className="iconfont icon-downarrow"/>
                </div>
            </div>

            {/*烟花*/}
            <FireWork showFireWork={showFireWork} firework={firework}/>
        </div>
    );
}

export default Content;