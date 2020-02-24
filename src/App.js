// package 에에 있는 dependency 를 불러온다. import 와 동일한 효과
import React from "react"
import ReactDOM from "react-dom"


//hot loader를위해서 화면에 즉시반영하는구문
if(module.hot){
    module.hot.accept();
}

//화면에 뿌려지는 구문
/*
    jsx ?
    : javascript  + xml 의형태
    : 사람마다 부르는 이름은다르지만...template language
    : app.js 에서는  <div>Hello World hi hi ho~!!!</div> 이렇게 작성하였지만.
    : babel에 의해서 a.render(r.a.createElement("div",null,"Hello World hi hi ho~!!!") 형태의 구문으로 바뀐다.
    : 우리가 작성한 js 를 인식하는것이 아닌, bundel.js 에 기록된 내용이 표출된다.
    : ReactDOM.render 참고사항
        - xml 형태의 루트태그가 필요하다.
        - 열리는 태그가 있으면 반드시 닫히는 태그도 있어야한다.
        - javascript 는 가급적 넣지않는다. (넣을수있는 방법도 있긴하나, 최종데이터만 표출시켜주는것이 좋다)
        - babel 에 의해서 trans file 이되기때문에 javascript라는 형태의 키워드가 있으면 안된다.
        - es6 부터는 className(css) 키워드 역시 사용하면 안된다. js 문법으로 되어 작성하면 안됨. 따라서, jax 안에서 변경해야하는 키워드들이 있다.
        - divclassName->classNameName
        - labelfor->htmlFor
    : es5 기준 변수선언부형태
        - es5 이전 : var
        - es5 이후 : let(변수), const(상수)
*/

const

ReactDOM.render(
    <div classNameName="container">
        <div className="page-header">
            <h1>To do list</h1>
        </div>
        <div className="input-group input-group-lg">
            <input type="text" className="form-control" placeholder="할 일을 입력해주세요" />
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button">등록</button>
            </span>
        </div>
        <hr/>
        <ul>
            <li>
                <span>이것도 해야 되고</span>
                <span className="btn-container"><a href="#">삭제</a></span>
            </li>
            <li>
                <span>저것도 해야 되고</span>
                <span className="btn-container"><a href="#">삭제</a></span>
            </li>
            <li>
                <span>그것도 해야 되고</span>
                <span className="btn-container"><a href="#">삭제</a></span>
            </li>
            <li>
                <span>언제 다 하나</span>
                <span className="btn-container"><a href="#">삭제</a></span>
            </li>
        </ul>
    </div> ,
     document.getElementById("app")
)
