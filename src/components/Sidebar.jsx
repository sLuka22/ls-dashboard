import { Link } from 'react-router-dom'

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SailingIcon from '@mui/icons-material/Sailing'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import ArticleIcon from '@mui/icons-material/Article'

const Sidebar = () => {
  return (
    <div className="sidebar__main bg--default flex__item border--right height--full">
      <div className="sidebar__top flex flex--vertical flex--middle flex--center border--bottom">
        <Link to="/" className="t--no-decoration">
          <span className="logo f--bolder">Luka Štiglic</span>
        </Link>
      </div>
      <div className="sidebar__middle m-left--s">
        <ul className="sidebar__menu front-page-widgets">
          <p className="title m-top--s f--bolder">MAIN</p>
          <Link to="/" className="f--bold t--no-decoration">
            <li className="menu__item flex flex--middle">
              <AccountCircleIcon className="icon icon--s icon--blue" />
              <span className="link-text">Identification</span>
            </li>
          </Link>
          <Link to="/" className="f--bold t--no-decoration">
            <li className="menu__item flex flex--middle">
              <AutoStoriesIcon className="icon icon--s icon--blue" />
              <span className="link-text">Education</span>
            </li>
          </Link>
          <Link to="/" className="f--bold t--no-decoration">
            <li className="menu__item flex flex--middle">
              <SportsSoccerIcon className="icon icon--s icon--blue" />
              <span className="link-text">Workout time</span>
            </li>
          </Link>
          <Link to="/" className="f--bold t--no-decoration">
            <li className="menu__item flex flex--middle">
              <SailingIcon className="icon icon--s icon--blue" />
              <span className="link-text">Vacation wishlist</span>
            </li>
          </Link>
        </ul>
        <ul className="sidebar__menu sidebar-pages">
          <p className="title m-top--s f--bolder">PAGES</p>
          <Link to="/crypto-list" className="f--bold t--no-decoration">
            <li className="menu__item flex flex--middle">
              <CurrencyBitcoinIcon className="icon icon--s icon--blue" />
              <span className="link-text">Crypto</span>
            </li>
          </Link>
          <Link to="/cv" className="f--bold t--no-decoration">
            <li className="menu__item flex flex--middle">
              <ArticleIcon className="icon icon--s icon--blue" />
              <span className="link-text">CV</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="sidebar__bottom m-left--s">
      </div>
    </div>
  )
}

export default Sidebar
