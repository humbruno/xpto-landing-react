import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const clickHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className={`${styles.sidebar} ${openMenu ? styles.active : ""}`}>
      <button className={styles.hamburgerMenu} onClick={clickHandler}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/about"
            activeClassName={styles.activeTab}
            className={styles.navItem}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/competitors"
            activeClassName={styles.activeTab}
            className={styles.navItem}
          >
            Competitors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/winners"
            activeClassName={styles.activeTab}
            className={styles.navItem}
          >
            Winners
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
