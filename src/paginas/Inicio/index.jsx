import styles from "./Inicio.module.css";
import posts from "src/json/posts.json";
import Post from "src/componentes/Post";

const Inicio = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
};

export default Inicio;
