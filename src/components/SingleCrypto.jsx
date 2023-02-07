// Icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import GroupIcon from '@mui/icons-material/Group'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'

const SingleCrypto = () => {
  return (
    <div className="single-crypto__widget component flex__item flex__item--double">
        <div className="flex flex--vertical">
          <span className="title c--secondary f--bolder f--s">Name</span>
          <span className="c--secondary f--s">Bitcoin</span>
        </div>
        <div className="flex flex--vertical">
          <span className="title c--secondary f--bolder f--s">Current price</span>
          <span className="c--secondary f--s">22398</span>
        </div>
        <div className="flex flex--vertical">
          <span className="title c--secondary f--bolder f--s">Market cap</span>
          <span className="c--secondary f--s">441057213102</span>
        </div>
        <div className="flex flex--vertical">
          <span className="title c--secondary f--bolder f--s">Circulating supply</span>
          <span className="c--secondary f--s">120511086.335724</span>
        </div>
        <div className="flex flex--vertical">
          <span className="title c--secondary f--bolder f--s">All time hight</span>
          <span className="c--secondary f--s">441057213102</span>
        </div>
    </div>
  )
}

export default SingleCrypto
