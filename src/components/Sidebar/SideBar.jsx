import style from "./SideBar.module.css";
import { PencilLine } from "phosphor-react";

export function SideBar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={style.profile}>
        <img className={style.avatar} src="https://github.com/JuanFila.png" />

        <strong>Juan Fila</strong>
        <span>Front-end Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine 
          size={20}
          />
          Visualizar perfil
        </a>
      </footer>
    </aside>
  );
}
