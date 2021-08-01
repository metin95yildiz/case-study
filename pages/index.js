import React from "react";
import EmployeeList from '../components/EmployeeList';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h2 className="company-name">Umbrella Group</h2>
      </header>
      <main className="main">
        <h1>Our Employees</h1>
        <EmployeeList />
      </main>

      <footer className="footer">
          Copyright ©{' '}
          <span className="company-name">
              Umbrella Group
          </span>
      </footer>
    </div>
  )
}