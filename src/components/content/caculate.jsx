import React, { Component } from 'react';
import Base from './base';
import { connect } from 'react-redux';
import digitButton from '../caculator/digitButton';
import DigitButton from '../caculator/digitButton';
import ACTIONS from '../../redux/action';
import OperationButton from '../caculator/operationButton';
import { type } from '@testing-library/user-event/dist/type';

class Caculate extends Component {
    state = {
        fomater: Intl.NumberFormat("en-IN"),
    };

    format = (number) => {
        if (number.toString() === "") return "";
        else {
            const [integer, decimal] = number.toString().split('.')
            if (decimal === undefined) return this.state.fomater.format(integer);
            else return `${this.state.fomater.format(integer)}.${decimal}`;
        }
    } 

    render() { 
        return (
            <Base>
                <div className="caculator">
                    <div className="output">
                        <div className="last-output">
                            {this.format(this.props.lastOperand)}{this.props.operation}
                        </div>
                        <div className="current-output">
                            {this.format(this.props.currentOperand)}
                        </div>
                    </div>
                    <button className='button-ac'
                        onClick={this.props.clear}
                    >
                        AC
                    </button>
                    <button onClick={this.props.delete_digit}>del</button>
                    {/* <button>x^2</button> */}
                    {/* <button>/</button> */}<OperationButton operation={"/"} />
                    {/* <button>7</button> */}<DigitButton digit={"7"} />
                    {/* <button>8</button> */}<DigitButton digit={"8"} />
                    {/* <button>9</button> */}<DigitButton digit={"9"} />
                    {/* <button>×</button> */}<OperationButton operation={"×"} />
                    {/* <button>4</button> */}<DigitButton digit={"4"} />
                    {/* <button>5</button> */}<DigitButton digit={"5"} />
                    {/* <button>6</button> */}<DigitButton digit={"6"} />
                    {/* <button>-</button> */}<OperationButton operation={"-"} />
                    {/* <button>1</button> */}<DigitButton digit={"1"} />
                    {/* <button>2</button> */}<DigitButton digit={"2"} />
                    {/* <button>3</button> */}<DigitButton digit={"3"} />
                    {/* <button>+</button> */}<OperationButton operation={"+"} />
                    {/* <button>+/-</button> */}
                    {/* <button>0</button> */}<DigitButton digit={"0"} />
                    {/* <button>.</button> */}<DigitButton digit={"."} />
                    <button className='button-equal'
                        onClick={this.props.evaluate}
                    >
                        =
                    </button>
                    
                </div>
            </Base>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operation: state.operation,
    }
}

const mapDispatchToProps = {
    delete_digit: () => {
        return {
            type: ACTIONS.DELETE_DIGIT,
        }
    
    },

    evaluate: () => {
        return {
            type: ACTIONS.EVALUATE,
        }
    },
    
    clear: () => {
        return {
            type: ACTIONS.CLEAR,
        }
    },
}
export default connect(mapStateToProps , mapDispatchToProps)(Caculate);