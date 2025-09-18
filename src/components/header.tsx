import Link from "next/link";
import { Navbar } from "./navbar";
import { Search } from "./search";

export function Header() {
    return (        <header className="navbar bg-base-100 shadow-sm">
          <Navbar/>
          <div className="navbar-center">
            <Link className="text-xl" href={"/"}>Welcome to AXIS</Link>
          </div>
          <Search />
        </header>)
}