import React from 'react';
import PropTypes from 'prop-types';
import {Col, FormGroup, Input, Row} from "reactstrap";
import ListButton from "./ListButton";

function ListHandlers(props) {
    return (
        <div>
            <Row>
                <Col md={{size: 5}} xs={{size:7}} >

                        <Input type="text"
                               name="task"
                               innerRef={props.refToInput}
                               placeholder="Add new task..."
                               onKeyPress={props.handleKeyPress} />


                </Col>

                <ListButton value={'Add'}
                            type={"primary"}
                            clickHandler={props.addTask}
                            mdSize={2}
                            xsSize={5}
                />

                <ListButton value={'Delete All'}
                            type={"danger"}
                            clickHandler={props.handleDeleteAll}
                            mdSize={3}
                            xsSize={7}
                />

                <ListButton value={"Shuffle"}
                            type={"success"}
                            clickHandler={props.handleShuffle}
                            mdSize={1}
                            xsSize={4}
                />
            </Row>
        </div>
    );
}

ListHandlers.PropTypes = {
    addTask: PropTypes.func.isRequired,
    handleDeleteAll: PropTypes.func.isRequired,
    refToInput: PropTypes.object.isRequired,
    handleKeyPress: PropTypes.func.isRequired,
    handleShuffle: PropTypes.func.isRequired
};


export default ListHandlers;