import { Comment } from "../Comment/Comment";
import style from "./Post.module.css";

export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img src="https://github.com/JuanFila.png" className={style.avatar} />
          <div className={style.authorInfo}>
            <strong>Juan Fila</strong>
            <span>Front-End Web Developer</span>
          </div>
        </div>

        <time title="28 de março às 07:12" dateTime="2024-02-29 07:12:40">
          Publicado há 1h
        </time>
      </header>

      <div className={style.content}>
        <p>Fala galeraa 👋 </p>

        <p>
          {" "}
          Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz
          sobre um feed de postagens de usuário... É somente o front mas é um 🚀{" "}
        </p>

        <p>
          <a href="#">#novoprojeto </a>
          <a href="#">#FeedComReact </a>
        </p>
      </div>

      <form className={style.commentForm}>
        <strong> Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
        <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={style.commentList}>
      <Comment/>
      <Comment/>
      <Comment/>
      </div>
    </article>
  );
}
