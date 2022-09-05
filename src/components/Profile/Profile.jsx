import React from "react";
import MyPosts from './My posts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
      <div>
        <ProfileInfo/>
        <MyPosts
            profilePage={props.profilePage}
            dispatch={props.dispatch}
        />
      </div>)
}

export default Profile
