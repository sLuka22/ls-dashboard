import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";

const Home = () => {
    return (
        <main className="main flex bg--default">
          <Sidebar />
          <div className="homepage home-page__container flex__item flex__item--hexa">
            <Navbar />
            <div className="widgets">
              <Widget />
              <Widget />
              <Widget />
              <Widget />
            </div>
          </div>
        </main>
    )
}

export default Home
