import * as ACTION from "./actionTypes";

export function voteEmployee(employeeIndex) {
    return {
        type: ACTION.VOTE_EMPLOYEE,
        employeeIndex
    }
}