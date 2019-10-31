import * as React from "react";

import Navbar from "../components/Navbar";
import PostItem from "../components/PostItem";

interface State {
  posts: IPost[];
  sortDirection: string;
}

class Home extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      posts: [],
      sortDirection: "DF"
    };

    this.sortPosts = this.sortPosts.bind(this);
  }

  async componentDidMount() {
    let response = await fetch("https://www.reddit.com/r/UpliftingNews/.json");

    let tmpPosts = await response.json();
    let savedPosts = JSON.parse(localStorage.getItem("saved")) || [];

    // flatten data.children and add a saved flag to each post
    let posts = tmpPosts.data.children.map((p: any) => {
      p.data.saved = savedPosts.includes(p.data.name);
      return p.data;
    });

    this.setState({
      posts
    });
  }

  _sort(posts: Array<IPost>) {
    posts.sort((a: IPost, b: IPost) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;

      return 0;
    });

    return posts;
  }

  sortPosts() {
    const { sortDirection, posts } = this.state;

    switch (sortDirection) {
      case "DF":
        {
          let sorted = this._sort(posts);

          this.setState({ posts: sorted, sortDirection: "AZ" });
        }
        break;
      case "AZ":
        {
          let sorted = this._sort(posts).reverse();

          this.setState({ posts: sorted, sortDirection: "ZA" });
        }
        break;
      case "ZA":
        {
          let sorted = this._sort(posts);

          this.setState({ posts: sorted, sortDirection: "AZ" });
        }
        break;

      default:
        console.error("unknown sort method");
        break;
    }
  }

  render() {
    const { posts, sortDirection } = this.state;

    return (
      <div>
        <Navbar />
        <button className="posts-sort" onClick={this.sortPosts}>
          {sortDirection}
        </button>
        <div className="posts">
          {posts && posts.map((p: IPost) => <PostItem key={p.name} post={p} />)}
        </div>
      </div>
    );
  }
}

export default Home;
