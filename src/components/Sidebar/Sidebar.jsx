import { useState } from "react";
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
          <a href="/" className={styles.navItemAbout}>
            About
          </a>
        </li>
        <li>
          <a href="/" className={styles.navItemUsers}>
            Competitors
          </a>
        </li>
        <li>
          <a href="/" className={styles.navItemWinners}>
            Winners
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
