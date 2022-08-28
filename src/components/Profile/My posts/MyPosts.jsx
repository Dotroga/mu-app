import React from "react";
import Post from './Post/Post'

const MyPosts = (props) => {
    let postElements = props.profilePage.posts.map(p =>
        <Post message={p.message} likeCount={p.likeCount}/>)
    let newPostElement = React.createRef()
    let AddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return <div>
        <div>
            my post
        </div>
        <div>
      <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.profilePage.newPostText}
      />
            <div>
                <button onClick={AddPost}>Add posts</button>
            </div>
        </div>
        <div>
            {postElements}
        </div>
    </div>
}

export default MyPosts
