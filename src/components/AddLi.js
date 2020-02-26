import React from "react";

/*
    클래스명과 파일명은 동일하게 하는게 일반적
*/
class AddLi extends React.Component{
    // 생성자
    // oop 의 부모클래스의 생성자 초기화와 동일함
    constructor(){
        super();
    }

    //render 메소드는 jsx 를 리턴한다.
    render(){
        return(
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="할 일을 입력해주세요" />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">등록</button>
                </span>
            </div>
        );
    }
}

// AddLi 라는 클래스를 다른곳에서 사용할수있게 처리해주는 구문
export default AddLi;