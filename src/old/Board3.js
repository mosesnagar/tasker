import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TaskCar1d from "./TaskCar1d";
import {Container, Row, Col, Button, Form, FormGroup, Input} from "reactstrap";

class Board3 extends Component {

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
        this.setState(prevState => ({
            all: [...prevState.all, a]
        }))
    };

    deleteAll = () => {
        this.setState({
            all: []
        })
    };

    handleDelete = (id) => {
        this.setState(prevState => ({
            all: [...prevState.all.filter(el => el.id !== id)]
        }))
    };

    render() {
        return (
            <div>
                <Container>
                    {/*<Form inline>*/}

                        <Row>


                            <Col xs={{size: 6, offset: 1}} md={{size: 3, offset: 4}}>
                                <FormGroup>
                                    <Input type="text" name="task" placeholder="Add new task..."/>
                                </FormGroup>
                            </Col>
                            {/*<Col xs={{size: 1, offset: 1}} md={{size: 1,offset:1}}>*/}
                                <Button size="sm" color="primary" onClick={this.addTask}>Add</Button>
                            {/*</Col>*/}


                        </Row>
                    {/*</Form>*/}

                    <Row>
                        <Col xs={{size: 1, offset: 1}} md={{size: 1, offset: 4}}>
                            <Button color="primary" onClick={this.addTask}>Add</Button>
                        </Col>
                        <Col xs={{size: 5, offset: 4}} md={{size: 4, offset: 2}}>
                            <Button color="danger" onClick={this.deleteAll}>Delete All</Button>
                        </Col>
                    </Row>
                </Container>

                {
                    this.state.all.map((task) =>
                        <TaskCar1d key={task.id} content={task} handleDelete={this.handleDelete.bind(this, task.id)}/>
                    )
                }
            </div>
        );
    }
}

Board3.PropTypes = {
    //props 
};

Board3.defaultProps = {
    //props default value
};

export default Board3;