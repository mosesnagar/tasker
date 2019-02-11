import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListHandlers from "../views/ListHandlers";
import {CardHeader} from "reactstrap";
import fire from "../fire";

class ListHandlerContainer extends Component {

    taskInput = React.createRef();

    taskRef = fire.database().ref('tasks');

    addTask = () => {
        const content = this.taskInput.current.value;
        if (content !== '') {
            const length = this.props.tasks ? Object.keys(this.props.tasks).length : 0;
            const task = {name: content, order: length,complete: false};
            this.taskRef.push(task);
            this.taskInput.current.value = "";
            this.taskInput.current.focus();

        }

    };

    deleteAll = () => {
        this.taskRef.once('value', function(snap) {
           snap.forEach(function (node) {
               if(node.val().complete === false) {
                   node.ref.remove();
               }
           })
        });
    };

    handleKeyPress = (target) => {
        if (target.charCode === 13) {
            this.addTask();
        }
    };

    shuffle = () => {
        const length = this.props.tasks ? Object.keys(this.props.tasks).length : 0;
        if (length < 2) return false;
        let arr = Array.from(Array(length).keys());

        let keys = Object.keys(this.props.tasks);
        for (let i = 0; i < arr.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        let updates = {};
        for (let i in arr) {
            updates[keys[i]] = {
                ...this.props.tasks[keys[i]],
                order: arr[i]
            };
        }
        this.taskRef.update(updates);

    };

    generatePropsListHanlder = () => ({
        addTask: this.addTask,
        handleDeleteAll: this.deleteAll,
        refToInput: this.taskInput,
        handleKeyPress: this.handleKeyPress,
        handleShuffle: this.shuffle

    });

    render() {

        const propsListHandler = this.generatePropsListHanlder();

        if (this.props.type) {
            return (
                <div>
                    <CardHeader>
                        Completed Tasks
                    </CardHeader>
                </div>
            );
        } else {
            return (
                <div>
                    <CardHeader>
                        <ListHandlers {...propsListHandler}/>
                    </CardHeader>
                </div>
            );
        }
    }
}

ListHandlerContainer.PropTypes = {
    tasks: PropTypes.object.isRequired,
    type: PropTypes.bool.isRequired,
};

ListHandlerContainer.defaultProps = {
    tasks: {},
    type: false,
};

export default ListHandlerContainer;