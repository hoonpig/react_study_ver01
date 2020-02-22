// package 에에 있는 dependency 를 불러온다. import 와 동일한 효과
import React from "react"
import ReactDOM from "react-dom"

if(module.hot){
    module.hot.accpet();
}

ReactDOM.render(
    <div></div>, document.getElementById("app")
)