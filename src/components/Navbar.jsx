import React from "react"

//Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LanguageIcon from '@mui/icons-material/Language';

const Navbar = () => {
  return (
    <header className="navbar border--bottom flex flex--middle">
      <div className="navbar__wrapper flex flex--apart flex--middle">
        <div className="navbar__search flex flex--middle border">
          <input type="text" placeholder="Search..." />
          <ManageSearchIcon className="icon icon--s icon--blue" />
        </div>
        <div className="navbar__icons  flex flex--middle">
          <LanguageIcon className="icon icon--s icon--blue m-left--s" />
          <GitHubIcon className="icon icon--s icon--blue m-left--s" />
          <LinkedInIcon className="icon icon--s icon--blue m-left--s" />
        </div>
      </div>
    </header>
  )
}

export default Navbar
