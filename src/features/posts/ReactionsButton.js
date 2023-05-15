import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

let reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "🧡",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionsButton = ({ post }) => {
  const dispatch = useDispatch();

  const reactionsButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
    console.log("key_value", name, emoji);
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionsButton}</div>;
};

export default ReactionsButton;



