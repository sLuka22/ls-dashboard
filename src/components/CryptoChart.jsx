import { useEffect, useState } from 'react'
import axios from "axios"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const CryptoChart = (props) => {
  const [ cryptoSymbol, setCryptoSymbol] = useState(props.selectedData.id)
  const [cryptoChartData, setCryptoChartData] = useState(null)
  const [ cryptoParam, setCryptoParam ] = useState(null)
  console.log(cryptoParam)
  console.log(props)

  useEffect(() => {
    setCryptoSymbol(props.selectedData.id)
  }, [props])

  useEffect(() => {
    setCryptoParam(cryptoSymbol.toUpperCase() + 'USDT')
  }, [cryptoSymbol])

  // const options = {
  //   method: 'GET',
  //   url: 'https://binance43.p.rapidapi.com/klines',
  //   params: {symbol: cryptoParam, interval: '4h', limit: '4'},
  //   headers: {
  //     'X-RapidAPI-Key': '63c94930b1mshf6ee4e32c67b7c7p14baaajsnc237154a709d',
  //     'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
  //   }
  // }

  // axios.request(options).then(function (response) {
  //   setCryptoChartData(response.data)
  // }).catch(function (error) {
  //   console.error(error)
  // })

  const data = [
    {
      time: "Hour 1",
      price: 23165.34,
    },
    {
      time: "Hour 2",
      price: 24145.34,
    },
    {
      time: "Hour 3",
      price: 22965.34,
    },
    {
      time: "Hour 4",
      price: 22665.34,
    }
  ]

  return cryptoSymbol ? ( // It should be cryptoChartData && cryptoSymbol when the API is working
      <div className="chart grid-item-two component flex__item flex__item--quadra flex flex--vertical">
        <div className="chart-title"><h2 className="title c--secondary f--s f--bolder">4 HOUR INTERVAL ({cryptoParam})</h2></div>
        <div className="chart-responsive__container m-top--s">
        <ResponsiveContainer height='100%' width='100%'>
          <LineChart
            layout="horizontal"
            width='100%'
            height='100%'
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis type="number" domain={[0, "dataMax + 1000"]} />
            <XAxis  dataKey="time" type="category" />
            <Tooltip />
            <Line dataKey="price" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
  ) : null
}

export default CryptoChart
