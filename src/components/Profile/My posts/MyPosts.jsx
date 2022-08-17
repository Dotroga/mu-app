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
            <Post message='Hi, how are you?' counter='72'/>
            <Post message="it's my first post"/>
            <Post message='Today is 17 August and I am studying the React'/>
        </div>

    </div>
}

export default MyPosts
