import React from "react";

const text = "To do hoonpig List";

class Title extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="page-header">
                <h1>{text}</h1>
            </div>
        );
    }
}

export default Title;