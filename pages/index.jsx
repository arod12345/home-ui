import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "../component";
import {
  Beach,
  LightHouse,
  CountrySide,
  BoatHouse,
  Castel,
  villa,
  Breakfast
} from "../assets/icons";
import { SearchIcon, FilterIcon } from "../assets";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const index = ({ propertiesForRent }) => {
  // const video =
  //   "";
  return (
    <>
      <header className="home-header flex">
        <div className="search-wrap flex">
          <input type="text" placeholder="Search Home | property" />
          <button className="search-icon flex">
            <Image className="lens" src={SearchIcon} />
          </button>
        </div>
        <div className="filter flex">
          <button className="filter-btn flex">
            <Image className="fl-icon" src={FilterIcon} />
            <p>filters</p>
          </button>
          <div className="coursel flex">
            <Image alt="" className="icons" title="beach" src={Beach} />
            <Image
              alt=""
              className="icons"
              title="lighthouse"
              src={LightHouse}
            />
            <Image alt="" className="icons" title="villa" src={villa} />
            <Image alt="" className="icons" title="castel" src={Castel} />
            <Image
              alt=""
              className="icons"
              title="boat house"
              src={BoatHouse}
            />
            <Image
              alt=""
              className="icons"
              title="country side"
              src={CountrySide}
            />
            <Image alt="" className="icons" title="Breakfast" src={Breakfast} />
          </div>
        </div>
      </header>
      <main className="home-main flex">
        <div className="home-main-grid grid">
          {propertiesForRent.map((property) => (
            <Card property={property} key={property.id} />
          ))}
        </div>
        <button className="more">See More Properties</button>
      </main>
    </>
  );
};
export async function getStaticProps() {
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=18`
  );

  return {
    props: {
      propertiesForRent: propertyForRent?.hits
    }
  };
}

export default index;
