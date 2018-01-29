import React from "react";
import { shallow } from "enzyme";
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

it("test to add post and remove post", () => {
  const wrapper = shallow(<Posts currentPersona="Morgana" author="Morgana" />);
  wrapper.setState({ posts: fakePost });

  expect(wrapper.state().posts[0].content).toContain("My post");

  wrapper.instance().removePost("0");
  // console.log(wrapper.state());
  expect(wrapper.state().posts).toEqual([]);

  
});
it("test to add post and remove post", () => {
  const wrapper = shallow(<Posts currentPersona="Morgana" author="Morgana" />);
  wrapper.setState({ posts: fakePost });

  expect(wrapper.state().posts[0].content).toContain("My post");

  // wrapper.instance().removePost("7");
  console.log(wrapper.state().posts[0].content);
  // expect(wrapper.state().posts[0].content).toContain("My post");
});
})