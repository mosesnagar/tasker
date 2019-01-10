import React from 'react';
import PropTypes from 'prop-types';
import {Button, CardTitle,Col, Row, Card, CardHeader, CardBody} from "reactstrap";

function TaskCard(props) {
    return (
        <div>
            <Row>
                <Col md={{size: 4, offset: 4}}>
                    <Card>
                        <CardHeader>Task No. {props.content.id}</CardHeader>
                        <CardBody>{props.content.name}</CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
        // <div className="row m-2">
        //     <div className="card col-md-5 offset-md-4  col-lg-4 offset-md-4 col-sm-6 offset-sm-3 ">
        //         <CardTitle>
        //             <Button close onClick={props.handleDelete}/>
        //         </CardTitle>
        //         <div className="card-body ">
        //             <h5 className="card-title">Task No. {props.content.id}</h5>
        //             {props.content.name}
        //         </div>
        //     </div>
        // </div>
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