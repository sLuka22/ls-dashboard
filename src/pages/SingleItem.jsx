import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Widget from "../components/Widget"
import React, { useState, useEffect } from 'react'
import axios from "axios"
import CryptoDataTable from "../components/CryptoDataTable"
import SingleCrypto from "../components/SingleCrypto"
import Chart from "../components/Chart"

const SingleItem = () => {
  return (
    <main className="main flex bg--default">
      <Sidebar />
      <div className="homepage home-page__container flex__item flex__item--hexa">
        <Navbar />
        <div className="single-crypto__container container flex m-top--s">
          <SingleCrypto />
          <Chart />
        </div>
        <div className="crypto-data-table__container container flex m-top--m">
          <CryptoDataTable />
        </div>
      </div>
    </main>
  )
}

export default SingleItem
