import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Navbar,
    NavbarBrand,
    Card,
    CardHeader,
    CardBody,
    Container,
    ListGroup,
} from 'reactstrap';
import TaskCard from "../views/TaskCard";
import Col from "reactstrap/es/Col";
import ListHandlers from "../views/ListHandlers";


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all: [
                {name: 'task 1', id: '1', order: 1},
                {name: 'task 2', id: '2', order: 2},
                {name: 'task 3', id: '3', order: 3},
                {name: 'task 4', id: '4', order: 4}
            ]
        }

        this.taskInput = React.createRef();

    }

    addTask = () => {
        const size = this.state.all.length + 1;
        const order = this.state.all.length + 1;
        const content = this.taskInput.current.value;
        if (content !== '') {
            const task = {name: content, id: size, order: order};
            this.setState(prevState => ({
                all: [...prevState.all, task]
            }))
            this.taskInput.current.value = "";
        }

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

    handleKeyPress = (target) => {
        if (target.charCode === 13) {
            this.addTask();
        }
    };

    shuffle = () => {
        let arr = this.state.all;
        for (let i = 0; i < arr.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        arr.map((task,id) => {
            task.order = id;
        });
        this.setState(prevState => ({
            all: arr
        }));
    };

    render() {

        let div = (
            <div>
                <Navbar color="light">
                    <NavbarBrand>Tasker</NavbarBrand>
                </Navbar>
                <Container>
                    <Col md={{size: 8, offset: 2}}>
                        <Card>
                            <CardHeader>

                                <ListHandlers addTask = {this.addTask.bind(this)}
                                              handleDeleteAll ={this.deleteAll.bind(this)}
                                              refToInput ={this.taskInput}
                                              handleKeyPress = {this.handleKeyPress.bind(this)}
                                              handleShuffle = {this.shuffle.bind(this)}/>

                            </CardHeader>
                            <CardBody>
                                <ListGroup>
                                    {
                                        this.state.all.sort(function(a,b) {
                                            return b.order - a.order;
                                        }).map((task) =>
                                            <TaskCard key={task.id} content={task}
                                                      handleDelete={this.handleDelete.bind(this, task.id)}/>
                                        )
                                    }
                                </ListGroup>

                            </CardBody>
                        </Card>
                    </Col>

                </Container>

            </div>
        );
        return div;
    }
}

Board.PropTypes = {
    //props 
};

Board.defaultProps = {
    //props default value
};

export default Board;