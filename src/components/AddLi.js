import React from "react";

/*
    클래스명과 파일명은 동일하게 하는게 일반적
*/
class AddLi extends React.Component{
    // 생성자
    // oop 의 부모클래스의 생성자 초기화와 동일함
    // Dom 에서  inputBox 를 찾지못하니, 생성자에 해당 함수를 바인딩 해준다.
    constructor(){
        super();
        this.onClickAddButtonFn = this.onClickAddButton.bind(this);
    }

    onClickAddButton(){
        console.log("input Text");
        this.props.handleAddedData(this.inputBox.value);
    }

    //render 메소드는 jsx 를 리턴한다.
    //button 은 생성자의 onClickAddButtonFn 을 참조하고, 참조된 이벤트는 onClickAddButton 에 바인딩되어 실행된다.
    render(){
        return(
            <div className="input-group input-group-lg">
                <input ref={input => {this.inputBox = input}} type="text" className="form-control" placeholder="할 일을 입력해주세요" />
                <span className="input-group-btn">
                    <button onClick={this.onClickAddButtonFn} className="btn btn-primary" type="button">등록</button>
                </span>
            </div>
        );
    }
}

// AddLi 라는 클래스를 다른곳에서 사용할수있게 처리해주는 구문
export default AddLi;