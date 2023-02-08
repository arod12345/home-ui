import React from "react";
import Image from "next/image";
import { Christopher, Edward, Ian, Random } from "../assets/random people pics";
import { logOut, gridIcon, User, Home, SettingIcon, Folder } from "../assets";

const EventSideBar = () => {
  return (
    <div className="event-holder flex">
      <div className="profile flex">
        <div className="pr-pic">
          <Image className="img" src={User} />
        </div>
        <div className="text">
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>Admin</p>
          <p>Jhon Doe</p>
        </div>
      </div>
      <div className="card-call flex">
        <div className="phone er"></div>
        <div className="camera er"></div>
      </div>
      <div className="contacts flex">
        <h1 style={{ fontSize: "18px", color: "orangered" }}>
          Recent Registry
        </h1>
        <span className="wro">
          <span className="pic-dl"></span>
          <span className="txt">Ivan&nbsp;Doord</span>
        </span>
        <span className="wro">
          <span className="pic-dl"></span>
          <span className="txt">Angela&nbsp;joe</span>
        </span>
        <span className="wro">
          <span className="pic-dl"></span>
          <span className="txt">Deed&nbsp;Frank</span>
        </span>
      </div>
    </div>
  );
};

export default EventSideBar;
