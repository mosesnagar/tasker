import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TaskCard from "../views/TaskCard";
import {Container, Row, Col} from "reactstrap";

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            all: [
                {name: 'task 1', id: '1',},
                {name: 'task 2', id: '2',},
                {name: 'task 3', id: '3',},
                {name: 'task 4', id: '4',}
            ]
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row >
                        <Col xs={{size:2,offset:1}} md={{size: 1,offset:4}}>
                            aaaa
                        </Col>
                        <Col xs={{size:2,offset:5}} md={{size: 1,offset:2}}>
                            aaaaa
                        </Col>

                    </Row>
                </Container>

                {
                    this.state.all.map((task) =>
                        <TaskCard key={task.id} content={task}/>
                    )
                }
            </div>
        );
    }
}

Board.PropTypes = {
    //props 
};

Board.defaultProps = {
    //props default value
};

export default Board;