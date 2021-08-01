import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { voteEmployee } from "../store/actions";
import Image from "next/image";

export default function EmployeeList() {
    const employees = useSelector((state) => state.employees);
    const dispatch = useDispatch();
    function vote(event, employee) {
        event.preventDefault();
        dispatch(voteEmployee(Object.values(employees).indexOf(employee)));
    }

    return (
        <ul className="employees">
            {
                Object.values(employees).sort((a, b) => b.numberOfVotes - a.numberOfVotes).map((employee) => {
                    return (
                        <li key={employee.id} className="employee">
                        <Link href={`/employeeDetails/${employee.id}`}>
                            <a>
                                <div className="image">
                                    <Image src={`${employee.image}-${employee.id}`} height={200} width={250} alt="Picture" />
                                </div>
                                <div className="name-surname">
                                    <span className="bold">Name: </span>{employee.firstName} -{" "}
                                    <span className="bold">Surname</span>: {employee.lastName}
                                </div>
                                <div className="job-title"><span className="bold">Job Title:</span> {employee.jobTitle}</div>
                                <button className="vote-button" onClick={(event) => vote(event, employee)}>
                                    Vote
                                </button>
                            </a>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}