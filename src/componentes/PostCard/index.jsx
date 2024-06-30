import BotaoPrincipal from "src/componentes/BotaoPrincipal";
import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import PropTypes from "prop-types";

export default function PostCard({ post }) {
  const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:5173";
  const getImagePath = (id) => `${baseURL}/src/assets/posts/${id}/capa.png`;

  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={getImagePath(post.id)}
          alt="Imagem de capa do post"
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
