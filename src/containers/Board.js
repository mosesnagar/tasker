import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TaskCard from "../views/TaskCard";

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            all: [
                {name:'task 1', id:'1',},
                {name:'task 2', id:'2',},
                {name:'task 3', id:'3',},
                {name:'task 4', id:'4',}
                ]
        }
    }

    addTask = () => {
        const a = {name: 'task 5', id: 5};
         this.setState( prevState => ({
             all: [...prevState.all, a]
         }))
    };

    render() {
        const tasks = this.state.all.map((task)=>
                <TaskCard key={task.id}content={task}/>
        );
        return (
            <div className="container">
                {
                    this.state.all.map((task)=>
                        <TaskCard key={task.id} content={task}/>
                    )
                }
                <input type="button" onClick={this.addTask}/>
            </div>
        );
    }
}

Board.PropTypes = {
    //props 
};

Board.defaultProps = {
    //props default value
};

export default Board;