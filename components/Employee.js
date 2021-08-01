import React from "react";
import Image from "next/image";

export default function Employee({ employee }) {
    return (
        <div className="employee-details">
            <div className="image">
                <Image src={`${employee.image}-${employee.id}`} height={240} width={300} alt="Picture" />
            </div>
            <div className="name-surname"><span className="bold">Name:</span> {employee.firstName}</div>
            <div className="name-surname"><span className="bold">Surname</span>: {employee.lastName}</div>
            <div className="job-title"><span className="bold">Job Title:</span> {employee.jobTitle}</div>
            <div className="address"><span className="bold">Address:</span> {employee.address}</div>
            <div className="email"><span className="bold">E-mail:</span> {employee.emailAddress}</div>
            <div className="phone-number"><span className="bold">Phone number:</span> {employee.phoneNumber}</div>
        </div>
    )
}