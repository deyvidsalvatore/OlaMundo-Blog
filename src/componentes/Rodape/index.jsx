import styles from "./Rodape.module.css";
import marcaRegistrada from "src/assets/marca_registrada.svg";

export const Rodape = () => {
  return (
    <footer className={styles.rodape}>
      <img src={marcaRegistrada} alt="Marca Registrada" />
      @deyvidsalvatore
    </footer>
  );
};

export default Rodape;
