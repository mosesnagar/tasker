import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup, Input, Row,Col} from "reactstrap";

class ListHandlers2 extends Component {


    render() {
        return (
            <div>
                <Row>
                    <Col md={{size: 5}}>
                        <FormGroup>
                            <Input type="text"
                                   name="task"
                                   innerRef={this.props.refToInput}
                                   placeholder="Add new task..."/>
                        </FormGroup>

                    </Col>
                    <Col md={{size: 3}}>
                        <Button color="primary" onClick={this.props.addTask}>Add</Button>
                    </Col>
                    <Col md={{size: 4}}>
                        <Button color="danger" onClick={this.props.handleDeleteAll}>Delete All</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

ListHandlers2.PropTypes = {
    //props 
};

ListHandlers2.defaultProps = {
    //props default value
};

export default ListHandlers2;