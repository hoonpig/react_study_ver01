import React from "react";
/*
    - props 예제
        : this.props 키워드를 통해 부모의 변수접근
        : 여기서는 Todo.js 의 text 변수접근
        : React.Component 를 상속받았기때문에, 사용가능
*/

class Title extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="page-header">
                <h1>{this.props.text}</h1>
            </div>
        );
    }
}

export default Title;