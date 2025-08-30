import styles from "./Display.module.css";
const Display = ({displaycalVal}) => {

  return <input className ={styles.display} type="text" value={displaycalVal} readOnly/>
}

export default Display;