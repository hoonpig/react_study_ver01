import React from "react";
import AddLi from "../components/AddLi.js"
import Title from "../components/Title.js"
import TodoLi from "../components/TodoLi.js"

const text = "To do hoonpig List";
const todos = [
    "이것도 해야 되고~",
    "저것도 해야 되고~",
    "그것도 해야 되고~",
    "언제 다 하나~~"
];

/*
    react props, state
    - props
        : 부모로 부터 물려받은 데이터 (ex : Todo.js 가 부모, Title.js 가 자식)
        : 쓰기불가, 읽기만 가능
        : React.PropTypes 를 통해 데이터형 체크 가능
        : 컨테이너 안에서 동작
    - state
        : 컴포넌트 안에서 동작
        : 쓰기가능 ( state 는 immutable 하기 때문에, setState (getter, setter) 메소드를 통해 갱신)
        : 컴포넌트는 state 를 최소한으로 사용
        : state 를 변경하는 로직은 Container 에서 최대한 담당
        : state 를 실행하게되면, render 가 실행되기때문에 빈번하게 발생되면 오히려 성능저하 발생

    - 사용법
        현재 컨텍스트 변수명 = {자식이 사용하게될 변수명}
*/

class Todo extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="container">
                <Title text={text}/>
                <AddLi/>
                <hr/>
                <ul>
                    <TodoLi todos={todos}/>
                </ul>
            </div>
        );
    }
}


export default Todo;