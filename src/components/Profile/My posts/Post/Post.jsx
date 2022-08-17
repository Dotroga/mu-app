import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://i.pinimg.com/originals/8d/12/f0/8d12f0382048031467ab02c9956be173.png'></img>
                {props.message}
                <div>
                    <span> {props.counter} Like</span>
                </div>
            </div>
        </div>
    )
}

export default Post