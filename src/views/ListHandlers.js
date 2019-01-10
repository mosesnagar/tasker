import React from 'react';
import PropTypes from 'prop-types';
import {Button, Col, FormGroup, Input, Row} from "reactstrap";

function ListHandlers(props) {
    return (
        <div>
            <Row>
                <Col md={{size: 5}} xs={{size:7}} >
                    <FormGroup>
                        <Input type="text"
                               name="task"
                               innerRef={props.refToInput}
                               placeholder="Add new task..."
                               onKeyPress={props.handleKeyPress} />
                    </FormGroup>

                </Col>
                <Col md={{size: 2}} xs={{size:5}}>
                    <Button color="primary" onClick={props.addTask}>Add</Button>
                </Col>
                <Col md={{size: 3}} xs={{size:7}}>
                    <Button color="danger" onClick={props.handleDeleteAll}>Delete All</Button>
                </Col>
                <Col md={{size: 1}} xs={{size:4}}>
                    <Button color="success">Shuffle</Button>
                </Col>
            </Row>
        </div>
    );
}

ListHandlers.PropTypes = {
    //props 
};

ListHandlers.defaultProps = {
    //props default value
};

export default ListHandlers;