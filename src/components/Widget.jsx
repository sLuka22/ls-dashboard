// Icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import GroupIcon from '@mui/icons-material/Group'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'

const Widget = ({ type }) => {
  let data

  //temporary
  const amount = 100
  const percentage = 20

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'View all',
        icon: (
          <GroupIcon className="icon icon--s icon--blue flex-self--end " />
        )
      }
      break
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all',
        icon: (
          <ShoppingCartIcon className="icon icon--s icon--blue flex-self--end " />
        )
      }
      break
    case 'earnings':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View all',
        icon: (
          <AttachMoneyIcon className="icon icon--s icon--blue flex-self--end " />
        )
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'View all',
        icon: (
          <AccountBalanceIcon className="icon icon--s icon--blue flex-self--end " />
        )
      }
      break

    default:
      break
  }

  return (
    <div className="dynamic-widget component flex__item flex flex--apart">
      <div className="left flex flex--vertical flex--apart">
        <span className="title c--secondary f--bolder f--s">{data.title}</span>
        <span className="counter f--xxl">{amount}{data.isMoney && ' €'}</span>
        <a href="" className="widget-link">{data.link}</a>
      </div>
      <div className="right flex flex--vertical flex--apart">
        <div className="percentage flex flex--middle">
          <KeyboardArrowUpIcon className="icon icon--s icon--blue" />
          <span className="percentage-value f--s">{percentage} %</span>
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
