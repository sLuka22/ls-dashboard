import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

// Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import LanguageIcon from '@mui/icons-material/Language'
import SidebarMobile from './SidebarMobile'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import CategoryIcon from '@mui/icons-material/Category'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import CloseIcon from '@mui/icons-material/Close'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const handleOpen = () => {
    setIsActive(!isActive)
  }
  const handleClose = () => {
    setIsActive(!isActive) }

  return (
    <header className="navbar border--bottom flex flex--middle">
      <div className="navbar__wrapper flex flex--apart flex--middle">
        <div className="navbar__icons flex__item  flex flex--middle">
          <a href="https://www.google.com/" className="social__link m-left--s"><LanguageIcon className="icon icon--s icon--blue" /></a>
          <a href="https://github.com/" className="social__link m-left--s"><GitHubIcon className="icon icon--s icon--blue" /></a>
          <a href="https://si.linkedin.com/" className="social__link m-left--s"><LinkedInIcon className="icon icon--s icon--blue" /></a>
        </div>
        <div className="navbar__search flex__item flex flex--spread flex--middle border">
          <input type="text" placeholder="Search..." />
          <ManageSearchIcon className="icon icon--s icon--blue" />
        </div>
        <div className="navbar__menu flex__item flex flex--end">
          <div onClick={handleOpen}>
            <MenuIcon className="icon icon--s icon--blue" />
          </div>
          {/* <SidebarMobile className={isActive ? 'activeSidebar' : ''} /> */}
          <div className={`sidebar__main mobile bg--default flex__item border--right ${isActive ? 'activeSidebar' : ''}`}>
            <div className="sidebar__top flex flex--apart flex--middle m-left--s m-right--s">
              <span className="logo f--bolder">Menu</span>
              <div onClick={handleClose}>
                <CloseIcon className="icon icon--s icon--blue" />
              </div>
            </div>
            <div className="sidebar__middle m-left--s">
              <ul className="sidebar__menu front-page-widgets">
                <p className="title m-top--s f--bolder">MAIN</p>
                <li className="menu__item flex flex--middle">
                  <NavLink to="/" className="f--bold flex t--no-decoration">
                    <DashboardIcon className="icon icon--s icon--blue" />
                    <span className="link-text">Dashboard</span>
                  </NavLink>
                </li>
                <li className="menu__item flex flex--middle">
                  <Link to="/" className="f--bold flex t--no-decoration">
                    <GroupIcon className="icon icon--s icon--blue" />
                    <span className="link-text">Users</span>
                  </Link>
                </li>
                <li className="menu__item flex flex--middle">
                  <NavLink to="/" className="f--bold flex t--no-decoration">
                    <CategoryIcon className="icon icon--s icon--blue" />
                    <span className="link-text">Products</span>
                  </NavLink>
                </li>
                <li className="menu__item flex flex--middle">
                  <NavLink to="/" className="f--bold flex t--no-decoration">
                    <QueryStatsIcon className="icon icon--s icon--blue" />
                    <span className="link-text">Statistics</span>
                  </NavLink>
                </li>
              </ul>
              <ul className="sidebar__menu sidebar-pages">
                <p className="title m-top--s f--bolder">PAGES</p>
                <li className="menu__item flex flex--middle">
                  <NavLink to="/crypto-list" className="f--bold flex t--no-decoration">
                    <CurrencyBitcoinIcon className="icon icon--s icon--blue" />
                    <span className="link-text">Crypto</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="sidebar__bottom m-left--s m-bottom--s">
              <p className="title m-top--s f--bolder">THEME</p>
              <div className="collor-options flex">
                <div className="collor-option icon icon--s bg--default"></div>
                <div className="collor-option icon icon--s bg--dark"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
