import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButton from "./ReactionsButton";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  // const test = useSelector(state => state);
  console.log("posts", posts);
  const renderedPosts =
    orderedPosts &&
    orderedPosts.length > 0 &&
    orderedPosts.map((post) => {
      return (
        <article key={post?.id}>
          <h3>{post?.title}</h3>
          <p>{post?.content?.substring(0, 100)}</p>
          <p className="postCredit">
            <PostAuthor userId={post.userId} />
            <TimeAgo timeStamp={post.date} />
            <ReactionsButton post={post} />
          </p>
        </article>
      );
    });

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
