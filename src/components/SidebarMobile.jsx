import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SailingIcon from '@mui/icons-material/Sailing'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const SidebarMobile = (props) => {
  const [isActive, setIsActive] = useState(false)

  const handleOpen = () => {
    setIsActive(!isActive)
  }
  const handleClose = () => {
    setIsActive(!isActive) }

  return (
    <div className="navbar__menu flex__item flex flex--end">
      <div onClick={handleOpen} className="icon__wrapper">
        <MenuIcon className="icon icon--s icon--blue" />
      </div>
      <div className={`sidebar__main mobile bg--default flex__item border--right ${isActive ? 'activeSidebar' : ''}`}>
        <div className="sidebar__top flex flex--apart flex--middle">
          <span className="logo f--bolder">Menu</span>
          <div onClick={handleClose} className="menu__item close">
            <CloseIcon className="icon icon--s icon--blue" />
          </div>
        </div>
        <div className="sidebar__middle sidebar-mobile--padding">
          <ul className="sidebar__menu front-page-widgets">
            <p className="title m-top--s f--bolder">MAIN</p>
            <Link to="/" className="f--bold flex t--no-decoration">
              <li className="menu__item flex flex--middle">
                <AccountCircleIcon className="icon icon--s icon--blue" />
                <span className="link-text">Identification</span>
              </li>
            </Link>
            <Link to="/" className="f--bold flex t--no-decoration">
              <li className="menu__item flex flex--middle">
                <AutoStoriesIcon className="icon icon--s icon--blue" />
                <span className="link-text">Education</span>
              </li>
            </Link>
            <Link to="/" className="f--bold flex t--no-decoration">
              <li className="menu__item flex flex--middle">
                <SportsSoccerIcon className="icon icon--s icon--blue" />
                <span className="link-text">Workout time</span>
              </li>
            </Link>
            <Link to="/" className="f--bold flex t--no-decoration">
              <li className="menu__item flex flex--middle">
                <SailingIcon className="icon icon--s icon--blue" />
                <span className="link-text">Vacation wishlist</span>
              </li>
            </Link>
          </ul>
          <ul className="sidebar__menu sidebar-pages">
            <p className="title m-top--s f--bolder">PAGES</p>
            <Link to="/crypto-list" className="f--bold flex t--no-decoration">
              <li className="menu__item flex flex--middle">
                <CurrencyBitcoinIcon className="icon icon--s icon--blue" />
                <span className="link-text">Crypto</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebar__bottom">
          <p className="title m-top--s f--bolder">THEME</p>
          <div className="collor-options flex">
            <div className="collor-option icon icon--s bg--default"></div>
            <div className="collor-option icon icon--s bg--dark"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarMobile
