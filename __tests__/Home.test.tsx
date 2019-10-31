import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

import Home from "../src/pages/Home";

let correctPostOrder = [
  {
    url:
      "https://b.thumbs.redditmedia.com/6ZjU5BCa0RlKD5LOOTPMoCFZAsoMmO3JMcpuVn66EPs.jpg",
    title: "bob",
    name: "t3_dozu5d",
    saved: true
  },
  {
    url:
      "https://b.thumbs.redditmedia.com/6ZjU5BCa0RlKD5LOOTPMoCFZAsoMmO3JMcpuVn66EPs.jpg",
    title: "john",
    name: "t3_dozu73",
    saved: false
  }
];

let correctPostOrderOpposite = [
  {
    url:
      "https://b.thumbs.redditmedia.com/6ZjU5BCa0RlKD5LOOTPMoCFZAsoMmO3JMcpuVn66EPs.jpg",
    title: "john",
    name: "t3_dozu73",
    saved: false
  },
  {
    url:
      "https://b.thumbs.redditmedia.com/6ZjU5BCa0RlKD5LOOTPMoCFZAsoMmO3JMcpuVn66EPs.jpg",
    title: "bob",
    name: "t3_dozu5d",
    saved: true
  }
];

let saved: Array<string> = ["t3_dozu5d"];

describe("Home tests", () => {
  beforeEach(() => {
    localStorage.setItem("saved", JSON.stringify(saved));
  });

  it("Sorting A-Z", async (done: any) => {
    const wrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    process.nextTick(() => {
      let home = wrapper.find(Home);
      let button = home.find(".posts-sort");

      button.simulate("click");

      expect(home.state("posts")).toEqual(correctPostOrder);

      button.simulate("click");

      expect(home.state("posts")).toEqual(correctPostOrderOpposite);

      done();
    });
  });
});
