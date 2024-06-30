import styles from "./Menu.module.css";
import MenuLink from "src/componentes/MenuLink";

export const Menu = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Ínicio</MenuLink>
        <MenuLink to="/sobre-mim">Sobre Mim</MenuLink>
      </nav>
    </header>
  );
};

export default Menu;
