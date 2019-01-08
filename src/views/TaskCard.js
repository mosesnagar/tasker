import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";

function TaskCard(props) {
    return (
        <div className="row m-2">
            <div className="card col-md-5 offset-md-4  col-lg-4 offset-md-4 col-sm-6 offset-sm-3 ">
                <div className="card-body ">
                    <h5 className="card-title">Task No. {props.content.id}</h5>
                    {props.content.name}
                    <Button className="float-right" bsStyle="primary" onClick={props.handleDelete}>Delete</Button>
                </div>
            </div>
        </div>
    );
}

TaskCard.PropTypes = {
    content: PropTypes.object,
    handleDelete:PropTypes.function
};

TaskCard.defaultProps = {
    content: {content: 'no content', id: 0}
};

export default TaskCard;