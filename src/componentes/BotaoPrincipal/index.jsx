import styles from "./BotaoPrincipal.module.css";
import PropTypes from "prop-types";

export default function BotaoPrincipal({ children, tamanho }) {
  return (
    <button
      className={`
            ${styles.botaoPrincipal}
            ${styles[tamanho]}
        `}
    >
      {children}
    </button>
  );
}

BotaoPrincipal.propTypes = {
  children: PropTypes.string,
  tamanho: PropTypes.string
};
