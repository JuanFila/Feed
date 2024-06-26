import style from "./avatar.module.css";

export function Avatar({src, hasBorder = true}) {
  return(
    <img 
     className={hasBorder ? style.avatarWithBorder : style.avatar}
     src={src} />
  )
}
