import React from "react";

const todos = [
    "이것도 해야 되고~",
    "저것도 해야 되고~",
    "그것도 해야 되고~",
    "언제 다 하나~~"
];


/*
    기존에 li tag 가 반복적으로 되어있던부분을 처리해주는부분
    : todos 배열에 있는 값을 return 한다.
    : => 이건 좌에서 우로향한 화살표. 일종의 문법
    : idx 는 배열의 n번째 값을 가져온다.
    : li tag 부분의 key 값은 DOM 의 rander 처리를 빠르게 하기위해서 Key 값을 부여한다.
        ( 부여하지 않아도 상관없으나, 가상의 메모리 DOM을 이용하기 때문에 warnning 이 발생할수있다.
          화면에서는 큰 문제는 없으나, key 를 밟급해주는것이 속도적인 측면에서 좋다. )
    : 위의 Key 부분이 충돌나면 화면표출시에 속도저하가 발생할수 있으니, key 설계부분도 필요하다.
    ----------------------------------------------------------------------------------------

    class 로 변경
*/

class TodoLi extends React.Component{
    constructor(){
        super();
    }

    render(){
        const todoLi = todos.map((todo, idx) => {
            return (
                <li key={"todo" + idx}>
                    <span>{todo}</span>
                    <span className="btn-container"><a href="#">삭제</a></span>
                </li>
            );
        });
        // 그낭 todoLi 를 반환하면 에러가난다.
        // 이유는 루트태그가 없이 결과값을 반환하기 때문인데, 그래서 <div> 로 감싸준뒤, 변수형태로 {todoLi} 로 반환해준다.
        // 루트태그를 처리하는 방법은 다양한다.
        return(
            <div>
                {todoLi}
            </div>
           );
    }
}

export default TodoLi;