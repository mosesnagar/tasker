import React from 'react';
import PropTypes from 'prop-types';
import ListHandlerContainer from "../containers/ListHandlerContainer";
import List from "../containers/List";

function RouterWrapper(props) {
    const tasksHandle = props.type ? null : props.tasks;

    return (
        <div>
            <ListHandlerContainer tasks={tasksHandle} type={props.type}/>

            <List tasks={props.tasks} type={props.type}/>

        </div>
    );
}

RouterWrapper.PropTypes = {
    tasks: PropTypes.object.isRequired,
    type: PropTypes.bool.isRequired,
};

RouterWrapper.defaultProps = {
    tasks: {},
    type: false,
};

export default RouterWrapper;