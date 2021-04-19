import React, { useState } from "react";
import ",/MessageSender.css";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import {useStateValue} from "./StateProvider";
import db from "./Firebase";
import firebase from "firebase";

function MessageSender() {
  const [{user}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageurl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
db.collection("posts").add({
message: input,
timestamp:firebase.firestore.fieldValue.
serverTimestamp(), 
profilePic:user.photoURL,
username: user.displayName,
image: imageurl

})
    // some clever db stuff
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="mesageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL}/>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            classname="messageSender__input"
            placeholder={"what's on your mind",${user.displayName}?
  }
          />
          <input placeholder=" image URL (Opttonal)" />
          value = {imageurl}
          onChange={(e) => setImageurl(e.target.value)}
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="MessageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__optiion">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3> Photo/Video</h3>
        </div>
        <div className="messageSender__optiion">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3> Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
