import employeeList from "../../constants/employees.json"
import {
    VOTE_EMPLOYEE
} from "../actions/actionTypes";

const initialState = employeeList;

function employees(state = initialState, action) {
    switch(action.type) {
        case VOTE_EMPLOYEE:
            return {
                ...state,
                [action.employeeIndex]: {
                    ...state[action.employeeIndex],
                    numberOfVotes: state[action.employeeIndex].numberOfVotes + 1
                }
                }
        default:
            return state
            }
}

export default employees;