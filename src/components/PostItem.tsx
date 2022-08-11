import React, { FC, useState } from "react";
import * as feather from "feather-icons";

interface Props {
  post: IPost;
}

const PostItem: FC<Props> = ({ post }) => {
  const [savedPost, setSavedPost] = useState(post.saved ?? false);

  const savePost = () => {
    let postId = post.name;
    // Get encoded json from localStorage
    let posts: Array<string> = JSON.parse(localStorage.getItem("saved")) || [];

    if (posts.includes(postId)) return;

    // Add post id and re-encode posts to json
    posts.push(postId);
    localStorage.setItem("saved", JSON.stringify(posts));

    setSavedPost(true);
  }

  const removeSave = () => {
    // Get encoded json from localStorage
    let posts: Array<string> = JSON.parse(localStorage.getItem("saved")) || [];

    posts = posts.filter(p => {
      return p !== post.name;
    });

    localStorage.setItem("saved", JSON.stringify(posts));

    setSavedPost(false);
  }

  return (
    <div className="card">
      <div className="card-header">
        <div
          className={`card-stuff ${
            post.thumbnail !== "default" ? "" : "card-stuff-full"
          }`}
        >
          <h3 className="card-title">{post.title}</h3>
          <a className="card-link" href={post.url} target="_blank">
            {post.url.substr(0, 30) + "..."}
          </a>
        </div>
        {post.thumbnail !== "default" && (
          <img className="card-thumbnail" src={post.thumbnail} />
        )}
      </div>
      <div className="card-side">
        <div
          className="card-icon"
          onClick={savedPost ? removeSave : savePost}
          dangerouslySetInnerHTML={{
            __html: feather.icons.bookmark.toSvg({
              color: savedPost ? "white" : "grey",
              class: "card-svg"
            })
          }}
        ></div>
      </div>
    </div>
  );
}

export default PostItem;
