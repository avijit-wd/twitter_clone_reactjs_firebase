import React from "react";
import "./RightWidgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
} from "react-twitter-embed";

const RightWidgets = () => {
  return (
    <div className="rightWidgets">
      <div className="rightWidgets__input">
        <SearchIcon className="rightWidgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="rightWidgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"759043035355312128"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="AvijitB60340175"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "AvijitB60340175" }}
        />
      </div>
    </div>
  );
};

export default RightWidgets;
