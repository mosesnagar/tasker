import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { CardBody, ListGroup} from "reactstrap";
import TaskCard from "../views/TaskCard"
import fire from "../fire";

class List extends Component {

    taskRef = fire.database().ref('tasks');

    handleDelete = (id) => {
        this.taskRef.update({
            [id]: null
        })
    };


    completeTask = (id) => {
        const task = this.props.tasks[id];
        this.taskRef.update({
            [id]: {
                ...task,
                complete: true
            }
        })
    };

    generateList = () => {
        const tasks = this.props.tasks;
        let list = [];

        for (let task in tasks) {
            list.push(
                <TaskCard key={task}
                          content={tasks[task]}
                          onCompleteTask={this.completeTask.bind(this, task)}
                          handleDelete={this.handleDelete.bind(this, task)}
                />
            );
        }
        return list;
    };


    render() {
        const wanted = this.props.type;
        console.log(wanted);
        return (
            <div>
                <CardBody>
                    <ListGroup>
                        {
                            this.generateList().filter(function (task) {
                                return task.props.content.complete === wanted;
                            }).sort(function (a, b) {
                                return b.props.content.order - a.props.content.order;
                            })
                        }
                    </ListGroup>
                </CardBody>
            </div>
        );
    }
}

List.PropTypes = {
    tasks: PropTypes.object.isRequired,
    type: PropTypes.bool.isRequired,
};

List.defaultProps = {
    tasks: {},
    type: false,
};

export default List;