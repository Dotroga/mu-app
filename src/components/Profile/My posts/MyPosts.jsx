import s from './MyPosts.module.css'
import Post from './Post/Post'

let postData = [
    {id: 0, message: 'Hi, how are you?', likeCount: 35},
    {id: 1, message: 'it\'s my first post', likeCount: 72},
    {id: 2, message: 'Today is 17 August and I am studying the React', likeCount: 17}
]

const MyPosts = () => {
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
            <Post message={postData[0].message} likeCount={postData[0].likeCount} />
            <Post message={postData[1].message} likeCount={postData[1].likeCount} />
            <Post message={postData[2].message} likeCount={postData[2].likeCount} />
        </div>

    </div>
}

export default MyPosts
