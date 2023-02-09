import React from "react";
import Image from "next/image";
import Link from "next/link";
import { House1, StarIcon, House2 } from "../assets";

const Card = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    score,
    title,
    category: { name },
    type,
    baths,
    area,
    agency,
    isVerified,
    indyScore,
    externalID
  }
}) => {
  return (
    <Link className="hyper-link" href={`/property/${externalID}`} passHref>
      <div className="card flex">
        <div className="card-pic">
          <Image
            loading="lazy"
            className="poster"
            src={coverPhoto ? coverPhoto.url : { House2 }}
            width={400}
            height={260}
          />
        </div>
        <div className="card-desc flex">
          <div className="rv-loc flex">
            <div className="location">{title}</div>
            <div className="review flex">
              <Image className="str-icon" src={StarIcon} />
              <p>{indyScore}</p>
            </div>
          </div>
          <div
            style={{ fontWeight: "bold", color: "#0000ff85" }}
            className="title"
          >
            AREA | {Math.floor(area)} m²
          </div>
          <div className="pr-book flex">
            <p style={{ color: "#ff000085" }} className="price">
              USD {price}
              {rentFrequency && `/${rentFrequency}`}
            </p>
            <button className="book">Book now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
