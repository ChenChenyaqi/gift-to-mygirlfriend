import React from 'react';
import "./fireworks.css"

const FireWork = (props) => {
    return (
        // 烟花
        <div>
            {
                props.showFireWork === "show" ?
                    <canvas width={document.documentElement.clientWidth}
                            height={document.documentElement.clientHeight}/>
                    : null
            }
        </div>
    );
}

export default FireWork;