// Icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const SingleCrypto = () => {
  return (
    <div className="dynamic-widget component flex__item flex flex--apart">
      <div className="left flex flex--vertical flex--apart">
        <span className="title c--secondary f--bolder f--s">Bitcoin</span>
        <span className="counter f--xxl">22398</span>
        <span className="c--secondary f--bolder f--s">92834892</span>
      </div>
      <div className="right flex flex--vertical flex--apart">
        <div className="percentage flex flex--middle">
          <KeyboardArrowUpIcon className="icon icon--s icon--blue" />
          <span className="percentage-value f--s">20 %</span>
        </div>
        <AttachMoneyIcon className="icon icon--s icon--blue flex-self--end " />
      </div>
    </div>
  )
}

export default SingleCrypto
