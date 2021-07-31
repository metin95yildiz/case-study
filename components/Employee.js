import React from "react";

export default function Employee() {
    return (
        <div className="employee-details">
            <div className="image"></div>
            <div className="name-surname"><span className="bold">Name:</span> Martin</div>
            <div className="name-surname"><span className="bold">Surname</span>: Shaw</div>
            <div className="job-title"><span className="bold">Job Title:</span> Engineer</div>
            <div className="address"><span className="bold">Address:</span> Engineer</div>
            <div className="email"><span className="bold">E-mail:</span> person@example.com</div>
            <div className="phone-number"><span className="bold">Phone number:</span> +1 543-332-252</div>
        </div>
    )
}