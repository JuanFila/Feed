import { useState } from "react";
import { Avatar } from "../Avatar/avatar";
import { Comment } from "../Comment/Comment";
import style from "./Post.module.css";


export function Post({ content, author, publishedAt}) {

  const [comments, setComments] = useState([]);

  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment() {
    event.preventDefault()
    
    setComments([...comments, newCommentText]);
    setNewCommentText('')
  }
  
  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value)
  }
  
  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne);
  }
  
  function handleNewCommentInvalid() {
    event.target.setCustomValidity("O campo comentário está em branco!")
  }
  
  const isNewCommentEmpty =  newCommentText.length === 0;
  
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.authorUrl} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="28 de março às 07:12" dateTime={publishedAt}>
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
          onInvalid={handleNewCommentInvalid}
          required
        />
        
        <footer>
        <button type="submit" disabled={isNewCommentEmpty}>Comentar</button>
        </footer>
      </form>
      <div className={style.commentList}>
      {
        comments.map(comment => {
          return (
          <Comment 
            content={comment} 
            key={comment} 
            OnDeleteComment={deleteComment}/> 
          ) 
      })}
      </div>
    </article>
  );
}
