import React from "react";
import MyPosts from './My posts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./My posts/MyPostsContainer";

const Profile = (props) => {
  return (
      <div>
        <ProfileInfo/>
        <MyPostsContainer
            store={props.store}
        />
      </div>)
}

export default Profile
