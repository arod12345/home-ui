import React from "react";
import { logOut, gridIcon, User, Home, SettingIcon, Folder } from "../assets";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="side-holder flex">
      <div className="side-holder_wrap flex">
        <h1>ADMIN DASHBOARD</h1>
        <span className="active">
          <Image className="icon-dash" src={gridIcon} /> Dashboard
        </span>
        <span>
          <Image className="icon-dash" src={Home} />
          Property
        </span>
        <span>
        <Image className="icon-dash" src={Folder} />Records</span>
        <span>
          <Image className="icon-dash" src={User} />
          Home Owner
        </span>
        <span>
          <Image className="icon-dash" src={SettingIcon} />
          Setting
        </span>
      </div>
      <button className="log_out flex">
      <Image className="icon-dash" src={logOut} />Log Out</button>
    </div>
  );
};

export default SideBar;
