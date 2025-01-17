import React, { Component } from 'react';
import ACTIONS from '../../redux/action';
import { connect } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';

class OperationButton extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={
                () => this.props.choose_operation(this.props.operation)}
            >
                {this.props.operation}
            </button>
        );
    }
}

const mapDispatchToProps = {
    choose_operation: operation => { //字典，将choose_operation映射到一个函数
        return {
            type: ACTIONS.CHOOOSE_OPERATION,
            operation:operation
        }
    }
}
 
export default connect(null , mapDispatchToProps)(OperationButton);