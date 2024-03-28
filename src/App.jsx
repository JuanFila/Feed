import { Header } from './components/Header/Header';

import styles from './App.module.css'
import './styles/global.css';
import { SideBar } from './components/sidebar/SideBar';

export default function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          POSTS
        </main>
      </div>
    </div>
  )
}
