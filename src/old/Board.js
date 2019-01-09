import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TaskCard from "../views/TaskCard";
import {Button, Grid, Row} from "react-bootstrap";
import Col from "react-bootstrap/es/Col";


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

    deleteAll = () => {
      this.setState({
          all : []
      })
    };

    handleDelete = (id) => {
        this.setState( prevState => ({
             all: [...prevState.all.filter(el => el.id !== id )]
            }))
    };


    render() {
        const tasks = this.state.all.map((task)=>
                <TaskCard key={task.id}content={task}/>
        );
        return (
            <div>
                <Grid>
                    <Row>
                        <Col  md={4} mdOffset={4}  xsOffset={1}>
                            <Button  bsStyle="primary" onClick={this.addTask}>Add</Button>
                        </Col>
                        <Col md={4} mdOffset={2}  xsOffset={1}>
                            <Button  bsStyle="primary" onClick={this.deleteAll}>Delete All</Button>

                        </Col>

                    </Row>
                    {
                        this.state.all.map((task)=>
                            <TaskCard key={task.id} content={task} handleDelete={this.handleDelete.bind(this,task.id)}/>
                        )
                    }
                </Grid>
            </div>
            // <div className="container">
            //     {/*<div className="row col-5  col-md-5 offset-md-4  col-lg-5 offset-md-1 col-sm-7 offset-sm-3">*/}
            //     <div className="row">
            //         <div className=" col-1 offset-5">
            //             <Button bsStyle="primary" onClick={this.addTask}>Add</Button>
            //         </div>
            //
            //         <div className=" ">
            //             <Button bsStyle="primary" onClick={this.deleteAll}>Delete All</Button>
            //         </div>
            //
            //     </div>
            //     {
            //         this.state.all.map((task)=>
            //             <TaskCard key={task.id} content={task} handleDelete={this.handleDelete.bind(this,task.id)}/>
            //         )
            //     }
            // </div>
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