
import React, { useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebase"





function Feed() {
  const [posts, setPosts] useState([]);

  useEffect (() => {
db.collection("posts")
.orderBy("timestamp", " desc")
.onSnapshot(snapshot =>
  setPosts (snapshot.docs.map(doc => ({ id: doc.id, data: doc,
    data()})))

);
  },[])




  return (
    <div className="feed">
      <StoryReel />
      <MessageSender/>
{posts.map((POST) =>(
<Post
key= {posts.id}
profilePic={posts.data.profilePic}
message= {post.datat.message}
timestamp={post.data.timestamp}
username={post.data.username}
image={post.data.image}
/>
  ))}

  </div>
  );
}

export default Feed;
