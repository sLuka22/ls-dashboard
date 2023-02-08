import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Widget from "../components/Widget"
import React, { useState, useEffect } from 'react'
import axios from "axios"
import CryptoDataTable from "../components/CryptoDataTable"
import SingleCrypto from "../components/SingleCrypto"
import CryptoChart from "../components/CryptoChart"

const SingleItem = () => {
  const [selectedData, setSelectedData] = useState(null)

  const handleSelect = (data) => {
    setSelectedData(data)
  }

  // console.log(selectedData)

  return (
    <main className="main flex bg--default">
      <Sidebar />
      <div className="homepage home-page__container flex__item flex__item--hexa">
        <Navbar />
        {selectedData ?
          <div className="single-crypto__container container flex m-top--s">
            <SingleCrypto selectedData={selectedData} />
            <CryptoChart selectedData={selectedData} />
          </div>
        : null}
        <div className="crypto-data-table__container container flex m-top--m">
          <CryptoDataTable onSelect={handleSelect} />
        </div>
      </div>
    </main>
  )
}

export default SingleItem
