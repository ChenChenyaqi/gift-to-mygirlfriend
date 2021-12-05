import React from 'react';
import MyMain from "./components/MyMain";
import "./App.css"

const App = () => {

    const appHeight = document.documentElement.clientHeight

    return (
        <div className="app" style={{height:`${appHeight}px`}}>
            <MyMain/>
        </div>
    );
}

export default App;