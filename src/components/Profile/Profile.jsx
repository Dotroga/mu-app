import s from './Profile.module.css'
import MyPosts from './My posts/MyPosts'

const Profile = () => {
  return <div className={s.content}>
    <img src='https://sun9-85.userapi.com/impg/IhpAFvbNi2HpQ7uhy-L4WeD6Rd99zPLuIk3IEw/Gws4-TgMFYI.jpg?size=1544x302&quality=96&sign=8192728460dd3671f8bbcef3b6633edb&type=album'></img>
    <div>
      ava + descriptions
    </div>
    <MyPosts />
  </div>
}

export default Profile
