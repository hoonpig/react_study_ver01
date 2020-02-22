// package 에에 있는 dependency 를 불러온다. import 와 동일한 효과
import React from "react"
import ReactDOM from "react-dom"

//hot loader를위해서 화면에 즉시반영하는구문
if(module.hot){
    module.hot.accept();
}

//화면에 뿌려지는 구문
ReactDOM.render(
    <div>Hello World</div>, document.getElementById("app")
)