import ACTIONS from "./action";


const reducer = (state = {
    currentOperand: "",
    lastOperand: "",
    operation:"",
} , action) => {
    switch (action.type) {
        case ACTIONS.ADD_DIGIT:
            // if (state.currentOperand === '0' && action.digit === '0')
            //     return state;
            if (state.currentOperand === '0' && action.digit !== '.')
                return {
                    ...state,
                    currentOperand:action.digit,
                }
            if (action.digit === '.' && String(state.currentOperand).includes('.'))
                //includes只能作用于字符串，当前的currentOperand已经被转为数字，所以要再转换为字符串
                return state;
            if (action.digit === '.' && state.currentOperand === "")
                return {
                    ...state,
                    currentOperand:"0.",
                }
            return {
                ...state,
                currentOperand:state.currentOperand + action.digit,
            }
        case ACTIONS.DELETE_DIGIT:
            if (state.currentOperand === "")
                return state;
            return {
                ...state,
                currentOperand:String(state.currentOperand).slice(0 , -1),
            }
        case ACTIONS.CHOOOSE_OPERATION:
            if (state.currentOperand === "") {
                return {
                    ...state
                }
            }
            if (state.operation !== "" && state.currentOperand !== "") {
                return {
                    ...state,
                    lastOperand: evaluate(state),
                    operation: action.operation,
                    currentOperand:"",
                }
            }
            else return {
                ...state,
                lastOperand: state.currentOperand,
                operation: action.operation,
                currentOperand:"",
            }
        case ACTIONS.EVALUATE:
            return {
                currentOperand: evaluate(state),
                operation: "",
                lastOperand:"",
            }
        
        case ACTIONS.CLEAR:
            return {
                currentOperand: "",
                lastOperand: "",
                operation:"",
            }
                
        default:
            return state;
    }
};

const evaluate = (state) => {
    const { currentOperand, lastOperand, operation } = state;

    switch (operation) {
            case "+":
                return parseFloat(currentOperand) + parseFloat(lastOperand);
            case "-":
                return parseFloat(lastOperand) - parseFloat(currentOperand);
            case "×":
                 return parseFloat(currentOperand) * parseFloat(lastOperand);
            case "/":
                 return parseFloat(lastOperand) / parseFloat(currentOperand);
        default:
            return 0;
    }
        
}



export default reducer