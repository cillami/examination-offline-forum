import React from "react";
import { shallow, mount } from "enzyme";
import Posts from "../components/Posts";

describe("post", ()=>{

const fakePost = [
  {
    title: "My title",
    content: "My post",
    id: "0",
    author: "Morgana",
    date: "1999-12-31"
  }
];

it("test to add post", () => {
  const wrapper = mount(<Posts currentPersona="Morgana" author="Morgana" />);
  wrapper.setState({ posts: fakePost });
  expect(wrapper.state().posts[0].content).toContain("My post");
});

it("test to remove post", () => {
  localStorage.setItem('posts', JSON.stringify(fakePost));
  const wrapper = mount(<Posts currentPersona="Morgana" author="Morgana" />);
  
  wrapper.instance().removePost("1");
  expect(wrapper.state().posts).not.toEqual([]);
  
  wrapper.instance().removePost("0");
  expect(wrapper.state().posts).toEqual([]);

});
});