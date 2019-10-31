import * as React from "react";
import { shallow } from "enzyme";

import Favourites from "../src/pages/Favourites";

let saved: Array<string> = ["t3_dozu5d"];

let savedPosts = [
  {
    url:
      "https://b.thumbs.redditmedia.com/6ZjU5BCa0RlKD5LOOTPMoCFZAsoMmO3JMcpuVn66EPs.jpg",
    title: "bob",
    name: "t3_dozu5d",
    saved: true
  }
];

describe("Test favourites page", () => {
  beforeEach(() => {
    localStorage.setItem("saved", JSON.stringify(saved));
  });

  it("Favourite posts is defined on state", async () => {
    const wrapper = shallow(<Favourites />);
    expect(wrapper.state("posts")).toBeDefined();
  });

  it("Filters out favourite posts", async (done: any) => {
    let wrapper = shallow(<Favourites />);

    process.nextTick(() => {
      expect(wrapper.state("posts")).toStrictEqual(savedPosts);
      done();
    });
  });
});
