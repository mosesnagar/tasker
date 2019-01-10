import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TaskCard from "../views/TaskCard";
import {Container, Row, Col, Button} from "reactstrap";

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            all: [
                {name: 'task 1', id: '1',},
                {name: 'task 2', id: '2',},
                {name: 'task 3', id: '3',},
                {name: 'task 4', id: '4',}
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
        return (
            <div>
                <Container>
                    <Row>

                    </Row>
                    <Row >
                        <Col xs={{size:1,offset:1}} md={{size: 1,offset:4}}>
                            <Button color="primary" onClick={this.addTask}>Add</Button>
                        </Col>
                        <Col xs={{size:5,offset:4}} md={{size: 4,offset:2}}>
                            <Button color="danger" onClick={this.deleteAll}>Delete All</Button>
                        </Col>
                    </Row>
                </Container>

                {
                    this.state.all.map((task) =>
                        <TaskCard key={task.id} content={task} handleDelete={this.handleDelete.bind(this,task.id)}/>
                    )
                }
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