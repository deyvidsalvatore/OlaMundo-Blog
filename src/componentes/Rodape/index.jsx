import styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "src/assets/marca_registrada.svg";

export const Rodape = () => {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      @deyvidsalvatore
    </footer>
  );
};

export default Rodape;
