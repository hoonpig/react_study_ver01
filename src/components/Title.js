import React from "react";
import PropTypes from "prop-types";
/*
    - props 예제
        : this.props 키워드를 통해 부모의 변수접근
        : 여기서는 Todo.js 의 text 변수접근
        : React.Component 를 상속받았기때문에, 사용가능
*/

//class > function
const Title = (props) => {
    return (
        <div className="page-header">
            <h1>{props.text}</h1>
        </div>
    );
}

//값의 형태체크 숫자,문자 또는 배열의 특정값등 다양하게 유요성 체그가 가능하다
Title.propTypes = {
    text: PropTypes.string
};

/*
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
*/
export default Title;