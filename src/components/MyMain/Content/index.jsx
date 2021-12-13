import React from 'react';
import "./index.css"

// 引入主内容
import {allContent} from "./content"

import Letter from "../Letter";
import MyHeader from "../../MyHeader";
import FireWork from "../FireWork";

// 引入各种图案，装饰信纸
import zimeiguiPath from "./flowers/紫玫瑰.svg";
import taohuaPath from "./flowers/桃花.svg";
import huaba1Path from "./flowers/花瓣1.svg";
import huaba2Path from "./flowers/花瓣2.svg";
import huaba3Path from "./flowers/花瓣3.svg";
import catPath from "./flowers/猫.png";


// 文字出现时间
const duringTime = 3
// 控制音乐函数
let switchMusic;

const Content = () => {

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
            <div key={contentIndex} className="my-content" style={{display: show}}>
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

            </div>

            {/*烟花*/}
            <FireWork showFireWork={showFireWork} firework={firework}/>
        </div>
    );
}

export default Content;