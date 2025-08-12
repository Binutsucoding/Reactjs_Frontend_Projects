import styles from "./Display.module.css";
const Display = ({ disCalVal }) => {
  return (
    <input className={styles.display} type="text" value={disCalVal} readOnly />
  );
};

export default Display;
