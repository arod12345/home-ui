import React from "react";
import Head from "next/head";
import "../styles/global.css";
import "../styles/Navbar.css";
import "../styles/Index.css";
import "../styles/signin.css";
import "../styles/admin.css";
import "../styles/details.css"

import { Navbar, Footer } from "../component";

const _app = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <main className="main flex">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default _app;
