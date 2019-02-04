import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, CardTitle, Col, ListGroupItem, Row} from "reactstrap";

class TaskCard extends Component {

    render() {
        return (
            <div>
                <ListGroupItem action >
                    <CardTitle onClick={this.props.handleDelete}>
                        <Button close />
                    </CardTitle>
                    <Row>
                        <Col md={{size: 8}} xs={{size:7}}>
                            {this.props.content.name}

                        </Col>
                        <Col md={{size:4}} xs={{size: 5}}>
                            {
                                // new Date(this.state.task.time).getMilliseconds()
                                this.props.content.order
                            }
                        </Col>
                    </Row>
                </ListGroupItem>
            </div>
        );
    }
}

TaskCard.PropTypes = {
    //props 
};

TaskCard.defaultProps = {
    //props default value
};

export default TaskCard;