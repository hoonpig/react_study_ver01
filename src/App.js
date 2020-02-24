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

const text = "To do hoonpig List";
const todos = [
    "이것도 해야 되고~",
    "저것도 해야 되고~",
    "그것도 해야 되고~",
    "언제 다 하나~~"
];

const Title = (
    <div className="page-header">
        <h1>{text}</h1>
    </div>
);

const AddLi = (
    <div className="input-group input-group-lg">
        <input type="text" className="form-control" placeholder="할 일을 입력해주세요" />
        <span className="input-group-btn">
            <button className="btn btn-primary" type="button">등록</button>
        </span>
    </div>
);


/*
    기존에 li tag 가 반복적으로 되어있던부분을 처리해주는부분
    : todos 배열에 있는 값을 return 한다.
    : => 이건 좌에서 우로향한 화살표. 일종의 문법
    : idx 는 배열의 n번째 값을 가져온다.
    : li tag 부분의 key 값은 DOM 의 rander 처리를 빠르게 하기위해서 Key 값을 부여한다.
        ( 부여하지 않아도 상관없으나, 가상의 메모리 DOM을 이용하기 때문에 warnning 이 발생할수있다.
          화면에서는 큰 문제는 없으나, key 를 밟급해주는것이 속도적인 측면에서 좋다. )
    : 위의 Key 부분이 충돌나면 화면표출시에 속도저하가 발생할수 있으니, key 설계부분도 필요하다.
*/
const TodoLi = todos.map((todo, idx) => {
    return (
        <li key={"todo" + idx}>
            <span>{todo}</span>
            <span className="btn-container"><a href="#">삭제</a></span>
        </li>
    );
});

ReactDOM.render(
    <div className="container">
        {Title}
        {AddLi}
        <hr/>
        <ul>
            {TodoLi}
        </ul>
    </div> ,
     document.getElementById("app")
)
