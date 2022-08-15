import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return <div>
        <div>
            my post
        </div>
        <div>
            <textarea></textarea>
            <button>Add posts</button>
        </div>
        <div>
            <Post />
            <Post />
            <Post />
        </div>

    </div>
}

export default MyPosts
