import React, {Component} from 'react';
import fire from '../fire';

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
import Col from "reactstrap/es/Col";
import ListHandlers from "../views/ListHandlers";
import TaskCard from "./TaskCard"

class Board extends Component {

    taskInput = React.createRef();

    taskRef = fire.database().ref('tasks');

    state = {
        all: {},
        size: 0,
    };

    componentWillMount = () => {
        this.taskRef.on('value', data => {
            this.setState({
                all: data.val(),
                size: data.numChildren()
            })
        });

        this.taskRef.on('child_changed', (data, key) => {
            console.log(data.val());
            console.log(data.numChildren());
            console.log(key);
            let updated = data.val();
            this.setState(prevState => ({
                all: {
                    ...prevState,
                    [key]: {updated}
                },
                size: prevState.size
            }))
        });

    };

    componentWillUnmount = () => {
        fire.removeBinding(this.taskRef)
    };


    addTask = () => {
        const content = this.taskInput.current.value;
        const size = this.state.size;
        console.log(size);
        if (content !== '') {
            const task = {name: content, order: size, time: 0};
            this.taskRef.push(task);
            this.taskInput.current.value = "";
            this.taskInput.current.focus();

        }

    };

    deleteAll = () => {
        this.taskRef.remove();
    };

    handleDelete = (id) => {
        this.taskRef.update({
            [id]: null
        })
    };

    handleKeyPress = (target) => {
        if (target.charCode === 13) {
            this.addTask();
        }
    };

    shuffle = () => {
        if (this.state.size < 2) return false;
        let arr = Array.from(Array(this.state.size).keys());
        const tasks = this.state.all;
        console.log(tasks);

        let keys = Object.keys(this.state.all);
        for (let i = 0; i < arr.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        let updates = {};
        for (let i in arr) {
            updates[keys[i]] = {
                ...this.state.all[keys[i]],
                order: arr[i]
            };
        }
        this.taskRef.update(updates);

    };

    taskClick = (id) => {
        // let arr = this.state.all;
        // arr.map((task) => {
        //     if (task.id === id) {
        //         task.time++;
        //     }
        // });
        // this.setState(prevState => ({
        //     all: prevState.all
        // }));
    };

    handleTaskClick = (id) => {
        setInterval(() => {
            this.taskClick(id)
        }, 10000)
    };

    generatePropsListHanlder = () => ({
        addTask: this.addTask,
        handleDeleteAll: this.deleteAll,
        refToInput: this.taskInput,
        handleKeyPress: this.handleKeyPress,
        handleShuffle: this.shuffle

    });

    generateList = () => {
        const tasks = this.state.all;
        let list = [];

        for (let task in tasks) {
            list.push(
                <TaskCard key={task}
                          content={tasks[task]}
                          handleDelete={this.handleDelete.bind(this, task)}
                          onTaskClick={this.handleTaskClick.bind(this, task)}
                />
            );
        }
        console.log(list);
        return list;
    };

    render() {
        const propsListHandler = this.generatePropsListHanlder();


        return <div>
            <Navbar color="light">
                <NavbarBrand>Tasker</NavbarBrand>
            </Navbar>
            <Container>
                <Col md={{size: 8, offset: 2}}>
                    <Card>
                        <CardHeader>
                            <ListHandlers {...propsListHandler}/>
                        </CardHeader>
                        <CardBody>
                            <ListGroup>
                                {
                                    this.generateList().sort(function (a, b) {
                                        console.log(a);
                                        return b.props.content.order - a.props.content.order;
                                    })

                                }
                            </ListGroup>

                        </CardBody>
                    </Card>
                </Col>

            </Container>

        </div>


    }
}

Board.PropTypes = {
    //props 
};

Board.defaultProps = {
    //props default value
};

export default Board;