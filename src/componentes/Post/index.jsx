import styles from "./Post.module.css";
import PropTypes from "prop-types";

export default function Post({ post }) {
  return (
    <div className={styles.post}>
      <img 
        src={`src/assets/posts/${post.id}/capa.png`} 
        alt="Imagem da capa do post" 
        className={styles.capa} 
      />

      <h2 className={styles.titulo}>{post.titulo}</h2>

      <button className={styles.botaoLer}>Ler</button>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.string.isRequired,
};
