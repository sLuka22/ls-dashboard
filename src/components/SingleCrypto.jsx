import { useState } from 'react'
import axios from "axios"

// Icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import GroupIcon from '@mui/icons-material/Group'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'


const SingleCrypto = (props) => {
  // const [ cryptoSymbol, setCryptoSymbol] = useState(props.selectedData.symbol)

  // const cryptoParam = cryptoSymbol.toUpperCase() + 'USDT'

  // const options = {
  //   method: 'GET',
  //   url: 'https://binance43.p.rapidapi.com/klines',
  //   params: {symbol: cryptoParam, interval: '8h', limit: '1'},
  //   headers: {
  //     'X-RapidAPI-Key': '63c94930b1mshf6ee4e32c67b7c7p14baaajsnc237154a709d',
  //     'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
  //   }
  // }

  // axios.request(options).then(function (response) {
  //   // console.log(response.data)
  // }).catch(function (error) {
  //   console.error(error)
  // })
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
