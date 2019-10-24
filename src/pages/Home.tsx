import * as React from "react";

import Navbar from "../components/Navbar";
import PostItem from "../components/PostItem";

interface State {
  posts: IPost[];
}

class Home extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    let response = await fetch("https://www.reddit.com/r/UpliftingNews/.json");

    let tmpPosts = await response.json();
    let posts = tmpPosts.data.children.map((p: any) => p.data);

    this.setState({
      posts
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <Navbar />
        <div className="posts">
          {posts && posts.map((p: IPost) => <PostItem key={p.name} post={p} />)}
        </div>
      </div>
    );
  }
}

export default Home;
