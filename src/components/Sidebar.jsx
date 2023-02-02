import React from "react"

//Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const Sidebar = () => {
  return (
    <section className="sidebar__main flex__item border--right height--full">
      <div className="sidebar__top flex flex--vertical flex--middle flex--center border--bottom">
        <span className="logo f--bolder">dashboard admin</span>
      </div>
      <div className="sidebar__middle m-left--s">
        <ul className="sidebar__menu">
          <p className="title m-top--s f--bolder">MAIN</p>
          <li className="menu__item flex flex--middle">
            <DashboardIcon className="icon icon--s icon--blue" />
            <span className="f--bold">Dashboard</span>
          </li>
          <li className="menu__item flex flex--middle">
            <GroupIcon className="icon icon--s icon--blue" />
            <span className="f--bold">Users</span>
          </li>
          <li className="menu__item flex flex--middle">
            <CategoryIcon className="icon icon--s icon--blue" />
            <span className="f--bold">Products</span>
          </li>
          <li className="menu__item flex flex--middle">
            <QueryStatsIcon className="icon icon--s icon--blue" />
            <span className="f--bold">Statistics</span>
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