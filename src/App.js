import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Board from "./containers/Board";

class App extends Component {

    render() {
        return (
            <div>
                <Board/>
            </div>
        );
    }
}

App.PropTypes = {
    //props 
};

App.defaultProps = {
    //props default value
};

export default App;