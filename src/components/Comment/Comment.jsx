import style from "./Comment.module.css";
import {Trash, ThumbsUp} from "phosphor-react"

export function Comment() {
  return (
    <div className={style.comment}>
      <img src="https://github.com/JuanFila.png" alt="" />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Juan Fila</strong>
              <time title="28 de março às 07:12" dateTime="2024-02-29 07:12:40">
                Cerca de 1hr atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom, parabéns</p>
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
