import * as React from "react";

interface Props {
  post: IPost;
}

class PostItem extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { post } = this.props;

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
      </div>
    );
  }
}

export default PostItem;
