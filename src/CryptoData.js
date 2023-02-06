import axios from "axios";

const CryptoData = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/markets',
  params: {vs_currency: 'usd', order: 'market_cap_desc', per_page: '100', page: '1'},
  headers: {
    'X-RapidAPI-Key': '63c94930b1mshf6ee4e32c67b7c7p14baaajsnc237154a709d',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
};

axios.request(CryptoData).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export default CryptoData
