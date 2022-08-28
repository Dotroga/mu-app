import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src=''></img>
                    {props.message}
                <div>
                    <span> {props.likeCount} Like</span>
                </div>
            </div>
        </div>
    )
}

export default Post