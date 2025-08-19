import { useState } from "react";
import styles from './ModoNoturno.module.css';

function Modo() {
 const [modoNoturno, setModoNoturno] = useState(false);

 return (
  <div className={modoNoturno ? styles.dark : styles.light}>
    <p>boooob</p>
    <h1>bobob</h1>
      <button onClick={() => setModoNoturno(!modoNoturno)}>Alternar Modo</button>
    </div>

 )
}

export default Modo;