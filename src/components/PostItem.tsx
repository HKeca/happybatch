import * as React from "react";
import * as feather from "feather-icons";

interface Props {
  post: IPost;
}

interface State {
  postSaved: boolean;
}

class PostItem extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      postSaved: props.post.saved
    };

    this.savePost = this.savePost.bind(this);
    this.removeSave = this.removeSave.bind(this);
  }

  savePost() {
    let postId = this.props.post.name;
    // Get encoded json from localStorage
    let posts: Array<string> = JSON.parse(localStorage.getItem("saved")) || [];

    if (posts.includes(postId)) return;

    // Add post id and re-encode posts to json
    posts.push(postId);
    localStorage.setItem("saved", JSON.stringify(posts));

    this.setState({
      postSaved: true
    });
  }

  removeSave() {
    const { post } = this.props;
    // Get encoded json from localStorage
    let posts: Array<string> = JSON.parse(localStorage.getItem("saved")) || [];

    posts = posts.filter(p => {
      return p !== post.name;
    });

    localStorage.setItem("saved", JSON.stringify(posts));

    this.setState({
      postSaved: false
    });
  }

  render() {
    const { post } = this.props;
    const { postSaved } = this.state;

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
            onClick={postSaved ? this.removeSave : this.savePost}
            dangerouslySetInnerHTML={{
              __html: feather.icons.bookmark.toSvg({
                color: postSaved ? "white" : "grey",
                class: "card-svg"
              })
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default PostItem;
