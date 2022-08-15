import s from './Nav.module.css'

const Nav = () => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <a>Профиль</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <a>Сообщения</a>
    </div>
    <div className={s.item}>
      <a>Новости</a>
    </div>
    <div className={s.item}>
      <a>Музыка</a>
    </div>
    <div className={s.item}>
      <a>Настройки</a>
    </div>
  </nav>
}

export default Nav