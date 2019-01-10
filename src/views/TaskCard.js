import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem, Row, CardTitle,Button} from "reactstrap";

function TaskCard(props) {
    return (
        <div>
            <ListGroupItem action>
                <CardTitle>
                    <Button close onClick={props.handleDelete}/>
                </CardTitle>
                {props.content.name}
            </ListGroupItem>
        </div>

    );
}

TaskCard.PropTypes = {
    content: PropTypes.object,
    handleDelete: PropTypes.func
};

TaskCard.defaultProps = {
    content: {content: 'no content', id: 0}
};

export default TaskCard;