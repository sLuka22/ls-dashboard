import { NavLink, Link } from 'react-router-dom'

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import CategoryIcon from '@mui/icons-material/Category'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'

const Sidebar = () => {
  return (
    <section className="sidebar__main flex__item border--right height--full">
      <div className="sidebar__top flex flex--vertical flex--middle flex--center border--bottom">
        <span className="logo f--bolder">dashboard admin</span>
      </div>
      <div className="sidebar__middle m-left--s">
        <ul className="sidebar__menu front-page-widgets">
          <p className="title m-top--s f--bolder">MAIN</p>
          <li className="menu__item flex flex--middle">
            <NavLink to="/" className="f--bold t--no-decoration">
              <DashboardIcon className="icon icon--s icon--blue" />
              <span className="link-text">Dashboard</span>
            </NavLink>
          </li>
          <li className="menu__item flex flex--middle">
            <Link to="/" className="f--bold t--no-decoration">
              <GroupIcon className="icon icon--s icon--blue" />
              <span className="link-text">Users</span>
            </Link>
          </li>
          <li className="menu__item flex flex--middle">
            <NavLink to="/" className="f--bold t--no-decoration">
              <CategoryIcon className="icon icon--s icon--blue" />
              <span className="link-text">Products</span>
            </NavLink>
          </li>
          <li className="menu__item flex flex--middle">
            <NavLink to="/" className="f--bold t--no-decoration">
              <QueryStatsIcon className="icon icon--s icon--blue" />
              <span className="link-text">Statistics</span>
            </NavLink>
          </li>
        </ul>
        <ul className="sidebar__menu sidebar-pages">
          <p className="title m-top--s f--bolder">PAGES</p>
          <li className="menu__item flex flex--middle">
            <NavLink to="/crypto-list" className="f--bold t--no-decoration">
              <CurrencyBitcoinIcon className="icon icon--s icon--blue" />
              <span className="link-text">Crypto</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sidebar__bottom m-left--s">
        <p className="title m-top--s f--bolder">THEME</p>
        <div className="collor-options flex">
          <div className="collor-option icon icon--s bg--default"></div>
          <div className="collor-option icon icon--s bg--dark"></div>
        </div>
      </div>
    </section>
  )
}

export default Sidebar
