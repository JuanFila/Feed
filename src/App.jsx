import { Header } from './components/Header/Header';

import styles from './App.module.css'
import './styles/global.css';
import { SideBar } from './components/sidebar/SideBar';
import { Post } from './components/Post/Post';

export default function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}
