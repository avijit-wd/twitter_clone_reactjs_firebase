import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase";
const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Avijit Biswas",
      username: "avijitb440",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://mk0trickyphotos51tq5.kinstacdn.com/wp-content/uploads/2017/08/6.jpg",
    });
  };
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://mk0trickyphotos51tq5.kinstacdn.com/wp-content/uploads/2017/08/6.jpg" />
          <input
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
          />
        </div>
        <input
          className="tweetbox__imageInput"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Enter image URL"
        />

        <Button onClick={sendTweet} className="tweetbox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default Tweetbox;
