import { Header } from './components/Header/Header';

import styles from './App.module.css'
import './styles/global.css';
import { SideBar } from './components/sidebar/SideBar';
import { Post } from './components/Post/Post';

// author {avatar_url: "", name: "",, role ""}
// publisheAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      authorUrl: 'https://github.com/JuanFila.png',
      name: 'Juan Fila',
      role: 'Dev-FRONT'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 '},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz sobre um feed de postagens de usuário... É somente o front mas é um 🚀'},
      {type: 'link', content: 'novoprojeto'},       
    ],
    publishedAt: new Date('2024-04-01') 
  },
  {
    id: 2,
    author: {
      authorUrl: 'https://github.com/Diego3g.png',
      name: 'Diego',
      role: 'CEO'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 '},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz sobre um feed de postagens de usuário... É somente o front mas é um 🚀'},
      {type: 'link', content: 'novoprojeto'},       
    ],
    publishedAt: new Date('2024-05-03') 
  },
]

export default function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
         {posts.map(post=> {
           return (
           <Post
           key={post.id}
           author={post.author}
           content={post.content}
           publishedAt={post.publishedAt}
           />
          )
         })}
        </main>
      </div>
    </div>
  )
}
