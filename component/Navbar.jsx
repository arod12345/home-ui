import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo, ToggleLeft, ToggleRight } from "../assets";
const Navbar = () => {
  return (
    <header className="main-header flex">
      <div className="main-header-wrapper flex">
        <div className="logo-section">
          <Link href="/">
            <Image className="logo" src={Logo} />
          </Link>
        </div>
        <div className="buttons-section flex">
          <div className="theme-switch flex">
            <Image
            src={ToggleLeft}
            className="toggle"
            />
          </div>
          <Link href="/signin">
            <button className="sgn">Sign In</button>
          </Link>
          <Link href="/login">
            <button className="lgn">Log In</button>
          </Link>
        </div>
        <div className="menu-holder">
          <Image />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
