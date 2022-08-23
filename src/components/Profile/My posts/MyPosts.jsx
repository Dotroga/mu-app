import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} />)
    return <div>
        <div>
            my post
        </div>
        <div>
            <textarea></textarea>
            <div>
                <button>Add posts</button>
            </div>
        </div>
        <div>
            { postElements }
        </div>
    </div>
}

export default MyPosts
