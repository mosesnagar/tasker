import React from 'react';
import PropTypes from 'prop-types';
import {Button, Col} from "reactstrap";

function ListButton(props) {
    const mdSize = props.mdSize;
    const xsSize = props.xsSize;

    return (

            <Col md={{size: mdSize}} xs={{size: xsSize}}>
                <Button color={props.type} onClick={props.clickHandler}>{props.value}</Button>
            </Col>

    );
}

ListButton.PropTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    mdSize: PropTypes.number,
    xsSize: PropTypes.number,
    clickHandler: PropTypes.func.isRequired,
};

ListButton.defaultProps = {
    type: 'primary',
    value: 'none',
    mdSize: 6,
    xsSize: 6,
};

export default ListButton;