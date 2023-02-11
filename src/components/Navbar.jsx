// Components
import SidebarMobile from './SidebarMobile'

// Icons
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LanguageIcon from '@mui/icons-material/Language'

const Navbar = () => {
  return (
    <header className="navbar border--bottom flex flex--middle">
      <div className="navbar__wrapper flex flex--apart flex--middle">
        <div className="navbar__icons flex__item  flex flex--middle">
          <a href="https://github.com/sLuka22" className="social__link m-left--s"><GitHubIcon className="icon icon--s icon--blue" /></a>
          <a href="https://www.linkedin.com/in/luka-%C5%A1tiglic-b17454228/" className="social__link m-left--s"><LinkedInIcon className="icon icon--s icon--blue" /></a>
        </div>
        <div className="navbar__search flex__item flex flex--spread flex--middle">
          <div className="icon__wrapper">
            <LanguageIcon className="icon icon--s icon--blue" />
          </div>
        </div>
        <SidebarMobile />
      </div>
    </header>
  )
}

export default Navbar
