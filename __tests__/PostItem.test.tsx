import * as React from "react";
import { shallow, mount } from "enzyme";

import PostItem from "../src/components/PostItem";

const post: any = {
  title: "Bob",
  permalink: "link",
  thumbnail:
    "https://b.thumbs.redditmedia.com/6ZjU5BCa0RlKD5LOOTPMoCFZAsoMmO3JMcpuVn66EPs.jpg",
  url: "https://b.thumbs.redditmedia.c...",
  name: "phone",
  saved: false
};

const savedPost: any = {
  title: "Bob",
  permalink: "link",
  thumbnail:
    "https://b.thumbs.redditmedia.com/6ZjU5BCa0RlKD5LOOTPMoCFZAsoMmO3JMcpuVn66EPs.jpg",
  url: "https://b.thumbs.redditmedia.c...",
  name: "phone",
  saved: true
};

describe("Post items", () => {
  it("Prop consistancy", () => {
    const wrapper = shallow(<PostItem post={post} />);

    expect(wrapper.find(".card-title").text()).toBe(post.title);

    let strippedText =
      wrapper
        .find(".card-link")
        .text()
        .substr(0, 30) + "...";

    expect(strippedText).toBe(post.url);
    expect(wrapper.find(".card-thumbnail").prop("src")).toEqual(post.thumbnail);
  });

  it("Bookmark changes to white when saved", () => {
    let wrapper = mount(<PostItem post={post} />);

    let parent = wrapper.find(".card-icon");
    let img = wrapper.render().find(".card-svg");

    expect(img.prop("color")).toEqual("grey");

    parent.simulate("click");

    img = wrapper.render().find(".card-svg");

    expect(img.prop("color")).toEqual("white");
  });

  it("Bookmark changes to grey when unsaved", () => {
    let wrapper = mount(<PostItem post={savedPost} />);

    let parent = wrapper.find(".card-icon");
    let img = wrapper.render().find(".card-svg");

    expect(img.prop("color")).toEqual("white");

    parent.simulate("click");

    img = wrapper.render().find(".card-svg");

    expect(img.prop("color")).toEqual("grey");
  });
});
