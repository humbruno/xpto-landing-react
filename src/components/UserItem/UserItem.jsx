import styles from "./UserItem.module.scss";

const UserItem = (props) => {
  return (
    <li onClick={props.onClick} className={styles.user}>
      {props.children}
    </li>
  );
};

export default UserItem;
