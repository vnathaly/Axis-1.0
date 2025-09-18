import Link from "next/link";
import { Navbar } from "./navbar";
import { Search } from "./search";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export function Header() {
    return (        <header className="navbar bg-base-100 shadow-sm">
          <Navbar/>
          <div className="navbar-center">
            <Link className="text-xl" href={"/"}>Welcome to AXIS</Link>
          </div>
          <div className="navbar-end">

           <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          <Search />
          </div>
        </header>)
}