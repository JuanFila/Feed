import { useState } from "react";
import { Avatar } from "../Avatar/avatar";
import { Comment } from "../Comment/Comment";
import style from "./Post.module.css";


export function Post({author, publishedAt, content}) {

  const [comments, setComments] = useState(
    ['Post muito bacana, hein!']
  );

  const [newCommentText, setNewCommentText] = useState('');


  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('')
    console.log(comments)
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src="https://github.com/JuanFila.png" />
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
        {
          content.map(line  => {
            if(line.type === 'paragraph'){
              return <p key={line.content}>{line.content}</p>;
            }else if (line.type === 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={style.commentForm}>
        <strong> Deixe seu feedback</strong>
        
        <textarea 
          name="comment" 
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        
        <footer>
        <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={style.commentList}>
      {
        comments.map(comment => {
          return <Comment content={comment} key={comment}/>
      })}
      </div>
    </article>
  );
}
