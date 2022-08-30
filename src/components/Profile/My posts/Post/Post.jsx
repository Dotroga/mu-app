import s from './Post.module.css'
import postAva from '../../../../img/postAva.jpg'

const Post = (props) => {
    return (
        <div className={s.item}>
           <div className={s.avaMessage}>
               <img src={postAva}></img>
               {props.message}</div>
            <div className={s.like}>
                <span> {props.likeCount} Like</span>
            </div>
        </div>
    )
}

export default Post