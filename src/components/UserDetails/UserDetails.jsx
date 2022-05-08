import styles from "./UserDetails.module.scss";

const UserDetails = (props) => {
  return <li className={styles.user}>{props.children}</li>;
};

export default UserDetails;
