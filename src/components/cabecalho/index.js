import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Cinetag Logo" />
      </Link>
      <nav>
      </nav>
    </header>
  );
}

export default Cabecalho;