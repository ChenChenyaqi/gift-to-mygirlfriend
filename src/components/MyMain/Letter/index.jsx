import React from 'react';
import "./index.css";
import upLetterPath from "./letter-imgs/before.png";
import letterPath from "./letter-imgs/letter_bg.png";
import downLetterPath from "./letter-imgs/after.png";

const Letter = (props) => {

    // 是否显示信封
    const [showLetter, setShowLetter] = React.useState("none")

    // 点击信封，开始
    const start = () => {
        // 显示信封
        setShowLetter("none")
        // 调用总开关
        props.start()
    }

    React.useEffect(() => {
        // 初始化延迟信封的显示
        setTimeout(() => {
            setShowLetter("")
        }, 600)
    }, [])

    return (
        // 信封
        <div onClick={start} className="start" style={{display: showLetter}}>
            {/*上信封*/}
            <div className="up-letter">
                <img src={upLetterPath} alt="信封"/>
            </div>
            <div className="letter-wrapper">
                <div className="letter">
                    {/*信纸*/}
                    <img src={letterPath} alt="信纸"/>
                    <div className="letter-content">
                        <span>赠予我的小宝贝</span>
                        {/*小心心*/}
                        <div className="open-letter">
                            <i className="iconfont icon-aixin"/>
                        </div>
                    </div>
                </div>
                {/*下信封*/}
                <div className="down-letter">
                    <img src={downLetterPath} alt="信封"/>
                </div>
            </div>
        </div>
    );
}

export default Letter;