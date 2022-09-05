import s from './Post.module.css'
import like from './../../../../img/Like.png'
import postAva from '../../../../img/postAva.jpg'

const Post = (props) => {
    return (
        <div className={s.item}>
           <div className={s.avaMessage}>
               <img src={postAva}></img>
               {props.message}</div>
            <div className={s.like}>
                <span> {props.likeCount} </span>
                <img src={like}/>
            </div>
        </div>
    )
}

export default Post