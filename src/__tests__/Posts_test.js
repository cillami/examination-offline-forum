import React from "react";
import { shallow, mount } from "enzyme";
import Posts from "../components/Posts";

it.skip("test to render posts", () => {

  const fakePost = [
    {
        title: "My title",
    content: "My post",
      id: "0",
      author: "",
      date: "1999-12-31"
    }
  ];

  const wrapper = shallow(<Posts currentPersona="" author="" />);
  
  wrapper.setState({ posts: fakePost });

  wrapper.instance().renderPostList(fakePost);

  const findMyPost = wrapper.find('article').first();

  expect(findMyPost.text()).toContain("My title");
});
