import React, { FC, useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import PostItem from "../components/PostItem";

interface State {
  posts: IPost[];
  sortDirection: string;
}

const Home: FC<{}> = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [sortDirection, setSortDirection] = useState("DF");


  useEffect(() => {
    (async () => {
      let response = await fetch("https://www.reddit.com/r/UpliftingNews/.json");

      let tmpPosts = await response.json();
      let savedPosts = JSON.parse(localStorage.getItem("saved")) || [];

      // flatten data.children and add a saved flag to each post
      let posts = tmpPosts.data.children.map((p: any) => {
        p.data.saved = savedPosts.includes(p.data.name);
        return p.data;
      });
    
      setPosts(posts);
    })();
  }, []);

  const _sort = (posts: Array<IPost>) => {
    posts.sort((a: IPost, b: IPost) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;

      return 0;
    });

    return posts;
  };

  const sortPosts = () => {
    switch (sortDirection) {
      case "DF":
        {
          let sorted = _sort(posts);

          setPosts(sorted);
          setSortDirection("AZ");
        }
        break;
      case "AZ":
        {
          let sorted = _sort(posts).reverse();

          setPosts(sorted);
          setSortDirection("ZA");
        }
        break;
      case "ZA":
        {
          let sorted = _sort(posts);

          setPosts(sorted);
          setSortDirection("AZ");
        }
        break;

      default:
        console.error("unknown sort method");
        break;
    }
  };

  return (
    <div>
      <Navbar />
      <button className="posts-sort" onClick={sortPosts}>
        {sortDirection}
      </button>
      <div className="posts">
        {
          posts
          ?  posts.map((p: IPost) => <PostItem key={p.name} post={p} />)
          : null
        }
      </div>
    </div>
  );
}

export default Home;
