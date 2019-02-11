import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import fire from '../fire';
import {
    Col,
    Navbar,
    NavbarBrand,
    Card,
    NavLink,
    Container,
} from 'reactstrap';
import RouterWrapper from "../views/RouterWrapper";

class Board extends Component {

    taskInput = React.createRef();

    taskRef = fire.database().ref('tasks');

    state = {
        all: {},
    };

    componentWillMount = () => {
        this.taskRef.on('value', data => {
            this.setState({
                all: data.val(),
            })
        });

        this.taskRef.on('child_changed', (data, key) => {
            let updated = data.val();
            this.setState(prevState => ({
                all: {
                    ...prevState,
                    [key]: {updated}
                },
            }))
        });

    };

    componentWillUnmount = () => {
        fire.removeBinding(this.taskRef)
    };


    render() {

        let type = false;

        return <div>
            <BrowserRouter>
                <div>
                    <Navbar color="light">
                        <NavbarBrand><Link to={'/'}>Tasker</Link></NavbarBrand>
                        <NavLink><Link to={'/completed'}>Completed</Link></NavLink>
                    </Navbar>

                    <Container>
                        <Col md={{size: 8, offset: 2}}>
                            <Card>

                                <Route exact path={'/'} render={(props)=>{
                                    return <RouterWrapper tasks={this.state.all} type={false}/>;

                                }
                                }/>

                                <Route exact path={'/completed'} render={(props)=>{
                                    return <RouterWrapper tasks={this.state.all} type={true}/>;

                                }
                                }/>


                            </Card>
                        </Col>

                    </Container>

                </div>

            </BrowserRouter>


        </div>


    }
}

export default Board;