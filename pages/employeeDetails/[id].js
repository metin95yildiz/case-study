import React from "react";
import Link from "next/link";
import Employee from "../../components/Employee";
import { useSelector } from "react-redux";
import employees from "../../constants/employees.json"

export default function EmployeeDetails({ id }) {
    const employees = useSelector((state) => state.employees);
    const clickedEmployee = Object.values(employees).find((employee) => employee.id === id);
    return (
        <div className="container">
            <header className="header">
                <h2 className="company-name">Umbrella Group</h2>
                <Link href="/">
                    <a className="return-to-list">Return to list</a>
                </Link>
            </header>
            <main className="main">
                <Employee employee={clickedEmployee}/>
            </main>
            <footer className="footer">
            Copyright ©{""}
                <span className="company-name">
              Umbrella Group
          </span>
            </footer>
        </div>
    )
}

export async function getStaticProps({ params: { id }}) {
    return { props: { id } }
}

export async function getStaticPaths() {
    const paths = [];
    Object.values(employees).map(k => {
        paths.push({
            params: { id: k.id }
        })
    })
    return {
        paths: paths,
        fallback: false
    }
}