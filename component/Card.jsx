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
    location: { name, name_l1 },
    baths,
    area,
    agency,
    isVerified,
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
            // src={House2}
            width={400}
            height={260}
          />
        </div>
        <div className="card-desc flex">
          <div className="rv-loc flex">
            <div className="location">
              {title}
              {/* Italy,sccilly */}
            </div>
            <div className="review flex">
              <Image className="str-icon" src={StarIcon} />
              <p>
                {score}
                {/* 4.5 */}
              </p>
            </div>
          </div>
          <div className="title">Type</div>
          <div className="pr-book flex">
            <p className="price">
              USD {price}
              {rentFrequency && `/${rentFrequency}`}
              {/* USD 678 */}
            </p>
            <button className="book">Book now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
