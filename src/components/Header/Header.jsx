import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/assets/logo.png" alt="XPTO Logo" className={styles.logo} />
      <div className={styles.profileInfo}>
        <strong>Admin</strong>
        <img src="assets/profile-photo.jpg" alt="" aria-hidden="true" />
      </div>
    </header>
  );
};

export default Header;
