import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="foot flex">
      <div className="foot-wrapper flex">
        <Image className="footer-logo" src={logo}/>
        <p> all rights reserved &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
