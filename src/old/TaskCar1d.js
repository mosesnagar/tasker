import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem, Row, CardTitle,Button,CardBody,Col} from "reactstrap";
import CardText from "reactstrap/es/CardText";

function TaskCar1d(props) {
    return (
        <div>
            <ListGroupItem action onClick={props.onTaskClick}>
                <CardTitle>
                    <Button close onClick={props.handleDelete}/>
                </CardTitle>
                <Row>
                    <Col md={{size: 8}} xs={{size:7}}>
                        {props.content.name}
                    </Col>
                    <Col md={{size:4}} xs={{size: 5}}>
                        {
                             new Date(props.content.time).getMilliseconds()
                        }
                    </Col>
                </Row>
            </ListGroupItem>
        </div>

    );
}

TaskCar1d.PropTypes = {
    content: PropTypes.object,
    handleDelete: PropTypes.func
};

TaskCar1d.defaultProps = {
    content: {content: 'no content', id: 0}
};

export default TaskCar1d;