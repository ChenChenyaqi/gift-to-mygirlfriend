import React, {Fragment} from 'react';
import "./index.css"


const musicList = [
    "/bgm/汪苏泷,By2%20-%20有点甜.mp3",
    "/bgm/花粥 - 纸短情长.mp3"
]

// 预加载音乐资源
const musicSrc = [new Audio(musicList[0]), new Audio(musicList[1])]
setTimeout(()=>{
    for (let i = 0; i < musicSrc.length; i++) {
        musicSrc[i].load()
    }
}, 1000)

// 音乐音量
const musicVolume = 0.8
// 音乐速度
const musicSpeed = 1
// 音乐列表索引
let musicIndex = 0

const MyHeader = (props) => {

    // 音乐是否播放动画效果
    const [rotateMusic, setRotateMusic] = React.useState(false)

    // 播放/暂停音乐
    const switchMusic = () => {
        // 暂停音乐
        if (rotateMusic) {
            setRotateMusic(false)
            musicSrc[musicIndex].pause()
            return
        }
        // 播放音乐
        setRotateMusic(true)
        musicSrc[musicIndex].play()
        musicSrc[musicIndex].volume = musicVolume
        musicSrc[musicIndex].playbackRate = musicSpeed
    }

    React.useEffect(() => {
        // 把switchMusic作为参数传递给Content组件里，以便调用
        props.switchMusic(switchMusic)

        // 监测一首歌是否播放完毕
        let time = setInterval(() => {
            if (musicSrc[musicIndex].currentTime >= musicSrc[musicIndex].duration) {
                // 如果索引到头，从头开始
                musicIndex++
                if (musicIndex === musicList.length) {
                    musicIndex = 0
                }
                musicSrc[musicIndex].play()
                musicSrc[musicIndex].volume = musicVolume
                musicSrc[musicIndex].playbackRate = musicSpeed
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
                       fontSize: "2rem",
                       display: "block",
                       animationName: "rotate-music",
                       animationDuration: "10s",
                       animationPlayState: `${!rotateMusic ? "paused" : "running"}`,
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