import React from 'react';
import PropTypes from 'prop-types';
import {Button, CardTitle, Col, ListGroupItem, Row} from "reactstrap";

function TaskCard(props) {
    const color = props.content.complete ? 'greenyellow' : 'white';

    return (
        <div>
            <ListGroupItem action
                           style={{backgroundColor: color}}
                           onDoubleClick={props.onCompleteTask}
            >
                <CardTitle onClick={props.handleDelete}>
                    <Button close />
                </CardTitle>
                <Row >
                    <Col md={{size: 8}} xs={{size:7}}>
                        {props.content.name}

                    </Col>
                </Row>
            </ListGroupItem>
        </div>
    );
}

TaskCard.PropTypes = {
    content: PropTypes.object,
    onCompleteTask: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

TaskCard.defaultProps = {
    content: {name: 'none', order: 0,complete: false}
};

export default TaskCard;