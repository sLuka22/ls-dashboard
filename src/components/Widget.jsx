// Icons
import InfoIcon from '@mui/icons-material/Info'
import GroupIcon from '@mui/icons-material/Group'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'

const Widget = ({title, isNumber, content, link, icon}) => {
  return (
    <div className="dynamic-widget component flex__item flex flex--apart">
      <div className="left flex flex--vertical flex--apart">
        <span className="title c--secondary f--bolder f--s">{title}</span>
        <span className={`counter ${isNumber ? 'f--xxl': 'f--l'}`}>{content}</span>
        <a href="" className="widget-link">{link}</a>
      </div>
      <div className="right flex flex--vertical flex--apart">
        <div className="percentage flex flex--middle">
          <InfoIcon className="icon icon--s icon--blue" />
          <span className="percentage-value f--s"></span>
        </div>
        {/* {icon} */}
      </div>
    </div>
  )
}

export default Widget
