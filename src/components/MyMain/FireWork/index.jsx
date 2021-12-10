import React from 'react';
import "./fireworks.css";
import fireworks from "./fireworks";

const FireWork = (props) => {

   if(props.firework){
       fireworks()
   }

    return (
        // 烟花
        <div >
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