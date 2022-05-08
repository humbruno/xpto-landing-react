import styles from "./UserItem.module.scss";

const UserItem = (props) => {
  return <li className={styles.user}>{props.children}</li>;
};

export default UserItem;
