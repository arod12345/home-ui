import React from "react";
import Image from "next/image";
import { SideBar,EventSideBar } from "../component";
import {
  logOut,
  gridIcon,
  User,
  Home,
  SettingIcon,
  Folder,
  Menu
} from "../assets";

const Admin = () => {
  return (
    <div className="Dashboard-main-wrapper flex">
      <SideBar />
      <div className="admin-main-content flex">
        <div className="fr-part flex">
          <div
            style={{ borderBottom: "3px solid #ff4500" }}
            className="property cd"
          >
            <div className="iconsbar">
              <Image src={Home} />
              <Image src={Menu} />
            </div>
            <h1>
              28000 +
              <br /> properties
            </h1>
            <button style={{ background: "#ff4500" }}>view all</button>
          </div>
          <div
            style={{ borderBottom: "3px solid #0000ff" }}
            className="record cd"
          >
            <div className="iconsbar">
              <Image src={Folder} />
              <Image src={Menu} />
            </div>
            <h1>
              1 Millions+
              <br /> Files
            </h1>
            <button style={{ background: "#0000ff" }}>view all</button>
          </div>
          <div
            style={{ borderBottom: "3px solid #008000" }}
            className="hw-owner cd"
          >
            <div className="iconsbar">
              <Image src={User} />
              <Image src={Menu} />
            </div>
            <h1>
              over half Million
              <br />
              Owners
            </h1>
            <button style={{ background: "#008000" }}>view all</button>
          </div>
        </div>
        <div className="st-part">
          <div className="st-bar flex">
            <>
              <h1 style={{ fontSize: "18px" }}>User Stats</h1>
            </>
            <>
              <p>Month</p>
              <p>6 Months</p>
              <p>Year</p>
            </>
            <>
              <Image src={Menu} />
            </>
          </div>
          <div className="graph"></div>
        </div>
        <div className="tr-part flex">
          <div className="site-stat flex">
            <div className="l-1 cr">
              <div className="dp">53%</div>
            </div>
            <div className="l-2 cr">
              <div className="dp">80%</div>
            </div>
            <div className="l-3 cr">
              <div className="dp"></div>
            </div>
          </div>
          <div className="site-speed"></div>
        </div>
      </div>
      <EventSideBar />
    </div>
  );
};

export default Admin;
