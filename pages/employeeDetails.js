import React from "react";
import Link from "next/link";
import Image from "next/image";
import Employee from "../components/Employee";

export default function EmployeeDetails() {

    return (
        <div className="container">
            <header className="header">
                <h2 className="company-name">Umbrella Group</h2>
                <Link href="/">
                    <a className="return-to-list">Return to list</a>
                </Link>
            </header>
            <main className="main">
                <Employee />
            </main>
            <footer className="footer">
                Powered by{""}
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </footer>
        </div>
    )
}