import React from "react";
import AddLi from "../components/AddLi.js"
import Title from "../components/Title.js"
import TodoLi from "../components/TodoLi.js"

class Todo extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="container">
                <Title/>
                <AddLi/>
                <hr/>
                <ul>
                    <TodoLi/>
                </ul>
            </div>
        );
    }
}


export default Todo;