import React from "react";
import Link from "next/link"

export default function EmployeeList() {
    function voteEmployee(event) {
        event.preventDefault();
    }
    return (
        <ul className="employees">
            <li className="employee">
            <Link href="/employeeDetails/">
                <a>
                    <div className="image"></div>
                    <div className="name-surname"><span className="bold">Name: </span>Martin - <span className="bold">Surname</span>: Shaw</div>
                    <div className="job-title"><span className="bold">Job Title:</span> Engineer</div>
                    <button className="vote-button" onClick={voteEmployee}>Vote!</button>
                </a>
                </Link>
            </li>
        </ul>
    );
}