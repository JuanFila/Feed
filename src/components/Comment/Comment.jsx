import { Avatar } from "../Avatar/avatar";
import style from "./Comment.module.css";
import {Trash, ThumbsUp} from "phosphor-react"

export function Comment({content, OnDeleteComment, publishedAt}) {
  function handleDeleteComment() {
    OnDeleteComment(content) // o melhor dos casos seria utilziar o id
  }
  return (
    <div className={style.comment}>
      <Avatar 
      hasBorder={false}
      src="https://github.com/JuanFila.png"/>

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Juan Fila</strong>
              <time title="28 de março às 07:12" dateTime={publishedAt}>
                Cerca de 1hr atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
