import React from 'react';
import "./index.css";
import upLetterPath from "./letter-imgs/before.png";
import letterPath from "./letter-imgs/letter_bg.png";
import downLetterPath from "./letter-imgs/after.png";

const Letter = (props) => {

    // 是否显示信封
    const [showLetter, setShowLetter] = React.useState("none")
    // 信纸向右上移动的动画
    const [moveLetter, setMoveLetter] = React.useState(false)

    // 点击信封，开始
    const start = (e) => {
        e.target.style.display = "none"
        // 让信纸向右上移动
        setMoveLetter(true)
        setTimeout(() => {
            // 显示信封
            setShowLetter("none")
            // 调用总开关
            props.start()
        }, 3500)
    }

    React.useEffect(() => {
        // 初始化延迟信封的显示
        setTimeout(() => {
            setShowLetter("")
        }, 600)
    }, [])

    return (
        // 信封
        <div className="start" style={{display: showLetter}}>
            {/*上信封*/}
            <div className="up-letter" style={{
                animation: moveLetter ? "letter-hidden 3s" : "",
                animationFillMode: moveLetter ? "forwards" : "",
            }}>
                <img draggable={false} src={upLetterPath} alt="信封"/>
            </div>
            <div className="letter-wrapper">
                {/*信纸*/}
                <div className="letter" style={{
                    animation: moveLetter ? "letter-move-up 3s" : "",
                    animationFillMode: moveLetter ? "forwards" : "",
                }}>
                    <img draggable={false} src={letterPath} alt="信纸"/>
                    <div className="letter-content">
                        <span>赠予我的小宝贝</span>
                        {/*小心心*/}
                        <div className="open-letter">
                            <i className="iconfont icon-aixin"/>
                        </div>
                    </div>
                </div>
                {/*下信封*/}
                <div className="down-letter" style={{
                    animation: moveLetter ? "letter-hidden 3s" : "",
                    animationFillMode: moveLetter ? "forwards" : "",
                }}>
                    <img draggable={false} src={downLetterPath} alt="信封"/>
                    {/*打开信封按钮*/}
                    <div className="open" onClick={start}>
                        <i className="iconfont icon-Open"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Letter;