import Image from "next/image";
import "../styles/Home.module.scss";
import EmployeeList from '../components/EmployeeList';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h2 className="company-name">Umbrella Group</h2>
      </header>
      <main className="main">
        <EmployeeList />
      </main>

      <footer className="footer">
          Copyright ©{' '}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </footer>
    </div>
  )
}
