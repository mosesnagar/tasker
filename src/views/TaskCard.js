import React from 'react';
import PropTypes from 'prop-types';


function TaskCard(props) {
    return (
        <div className="row m-2">
            <div className="card col-sm-4 offset-sm-4 ">
                <div className="card-body ">
                    <h5 className="card-title">Task No. {props.content.id}</h5>
                    {props.content.name}
                </div>
            </div>
        </div>
    );
}

TaskCard.PropTypes = {
    content: PropTypes.object
};

TaskCard.defaultProps = {
    content: {content: 'no content', id: 0}
};

export default TaskCard;