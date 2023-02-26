import React from "react";
import Image from "next/image";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import { House2 } from "../../assets/index";

const details = () => {
  return (
    <div className="details-main-wrap flex">
      <h1>Property Detalis</h1>
      <div className="gallery grid">
        <div className="prt one">
          <Image className="detail" src={House2}/>
        </div>
        <div className="prt two ">
          <Image className="detail" src={House2} />
        </div>
        <div className="prt three">
          <Image className="detail" src={House2} />
        </div>
      </div>
      <div className="content flex">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim vel
          amet minus nobis delectus nostrum fuga voluptatibus. Facilis,
        </p>
        <button className="book">Book now</button>
      </div>
    </div>
  );
};

export default details;
