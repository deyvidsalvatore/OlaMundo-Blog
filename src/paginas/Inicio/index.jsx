import styles from "./Inicio.module.css";
import posts from "src/json/posts.json";
import PostCard from "src/componentes/PostCard";

const Inicio = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default Inicio;
