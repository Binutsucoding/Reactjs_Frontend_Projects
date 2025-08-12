import styles from "./Button.module.css";
let Buttons = ({ handleButtonClick }) => {
  let buttonsName = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "+",
    "-",
    "*",
    "/",
    "%",
    "=",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((buttonName) => (
        <button
          className={styles.button}
          onClick={() => handleButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
