import { Link } from "react-router-dom";

function Cabecalho() {
  return (
    <header className={StyleSheet.cabecalho}>
      <Link to={"/"} className={StyleSheet.logo}>
        <img src="/logo.png" alt="Cinetag Logo" />
      </Link>

    </header>
  );
}

export default Cabecalho;