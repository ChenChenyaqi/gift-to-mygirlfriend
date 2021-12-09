import React, {Fragment} from 'react';
import "./index.css"


const musicList = [
    "/bgm/汪苏泷,By2%20-%20有点甜.mp3",
    "/bgm/花粥 - 纸短情长.mp3"
]

// 音乐音量
const musicVolume = 0.8
// 音乐速度
const musicSpeed = 1

const MyHeader = (props) => {

    // 音乐是否播放动画效果
    const [rotateMusic, setRotateMusic] = React.useState(false)

    // 播放/暂停音乐
    const switchMusic = () => {
        let music = document.getElementById("music");
        // 暂停音乐
        if (rotateMusic) {
            setRotateMusic(false)
            music.pause()
            return
        }
        // 播放音乐
        setRotateMusic(true)
        music.play()
        music.volume = musicVolume
        music.playbackRate = musicSpeed
    }

    React.useEffect(() => {
        // 把switchMusic作为参数传递给Content组件里，以便调用
        props.switchMusic(switchMusic)

        // 音乐列表索引
        sessionStorage.setItem("musicIndex", "0")

        // 监测一首歌是否播放完毕
        let time = setInterval(() => {
            let music = document.getElementById("music");
            if (music.currentTime >= music.duration) {
                // 获取索引
                let i = parseInt(sessionStorage.getItem("musicIndex"))
                // 如果索引到头，从头开始
                i++
                if (i === musicList.length) {
                    i = 0
                }
                music.src = musicList[i];
                // 更新索引
                sessionStorage.setItem("musicIndex", i + "")
                music.play()
                music.volume = musicVolume
                music.playbackRate = musicSpeed
            }
        }, 1000)
        return () => {
            clearInterval(time)
        }
    }, [])

    return (
        <Fragment>
            {/*音乐控制器*/}
            <div onClick={switchMusic} className="music-switch">
                <i className="iconfont icon-yinle"
                   style={{
                       fontSize: "3rem",
                       display: "block",
                       animationName: "rotate-music",
                       animationDuration: `${rotateMusic ? "10s" : ""}`,
                       animationIterationCount: "infinite",
                       animationTimingFunction: "linear",
                   }}
                />
            </div>
            {/*音源*/}
            <audio id="music">
                <source src={musicList[0]} type="audio/mpeg"/>
            </audio>
        </Fragment>
    );
}

export default MyHeader;