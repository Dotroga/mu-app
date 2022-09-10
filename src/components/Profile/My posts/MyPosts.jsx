import React from "react";
import Post from './Post/Post'
import s from './MyPosts.module.css'


const MyPosts = (props) => {
    let postElements = props.profilePage.posts.map(p =>
        <Post message={p.message} key={p.id} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPost(text)
    }
    return (
        <div className={s.container}>

            <div>
                <div>
                    <h2>My post</h2>
                    <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.profilePage.newPostText}
                    placeholder="What 's new with you ?"/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add posts</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>)
}

export default MyPosts
