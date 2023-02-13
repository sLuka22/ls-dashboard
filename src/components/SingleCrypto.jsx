import { useState } from 'react'
import axios from "axios"

const SingleCrypto = (props) => {
  return (
    <div className="single-crypto__widget grid-item-one component flex__item flex__item--double">
        <div className="flex flex--vertical">
          <span className="title c--secondary f--bolder f--s">Name</span>
          <span className="c--secondary f--s t--capitalize">{props.selectedData.symbol}</span>
        </div>
        <div className="flex flex--vertical">
          <span className="title c--secondary f--bolder f--s">Current price</span>
          <span className="c--secondary f--s">${props.selectedData.currentPrice}</span>
        </div>
        <div className="flex flex--vertical">
          <span className="title c--secondary f--bolder f--s">Market cap</span>
          <span className="c--secondary f--s">{props.selectedData.marketCap}</span>
        </div>
        <div className="flex flex--vertical">
          <span className="title c--secondary f--bolder f--s">Circulating supply</span>
          <span className="c--secondary f--s">{props.selectedData.circulatingSupply}</span>
        </div>
        <div className="flex flex--vertical">
          <span className="title c--secondary f--bolder f--s">All time hight</span>
          <span className="c--secondary f--s">{props.selectedData.allTimeHigh}</span>
        </div>
    </div>
  )
}

export default SingleCrypto
