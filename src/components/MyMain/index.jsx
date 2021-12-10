import React from 'react';
import "./index.css"
import Content from "./Content";
import "./stars.css"

const MyMain = () => {

    const star = Array.from({length: 200}, () => 1)


    return (
        <div className="my-main">
            <Content/>
            <div className="stars">
                {
                    star.length > 0 ? star.map((starItem, index) => {
                        const width = Math.random()
                        const top = Math.random() * 100
                        const left = Math.random() * 100
                        const duringTime = Math.random() * 10 + 1
                        // 色相
                        const hue = Math.random() * 360
                        // 饱和度
                        const saturation = Math.random() * 100
                        // 亮度
                        const lightness = Math.random() * 100
                        // 透明度
                        const alpha = Math.random()
                        return<div key={index} className="star"
                                   style={{
                                       width: `${width}rem`,
                                       height: `${width}rem`,
                                       position: "absolute",
                                       borderRadius: `50%`,
                                       backgroundColor: `hsl(${hue},${saturation}%,${lightness}%,${alpha})`,
                                       top: `${top}vh`,
                                       left: `${left}vw`,
                                       animation: `flashing ${duringTime}s`,
                                       animationIterationCount: "infinite",
                                       animationDirection: "alternate",
                                   }}
                        />
                    }) : null
                }
            </div>
        </div>
    );
}

export default MyMain;