import React from "react";
import { mount, shallow} from "enzyme";
import Comments from "../components/Comments";
import * as api from "../api/";

describe("test add and remove comment", () => {
  afterEach(() => {
    localStorage.clear();
  });

  const fejkComment = [
    {
      comment: "My comment",
      id: "1",
      author: "Zac",
      currentPersona: "Zac",
      date: "1999-12-31",
      postId: "the_hundreds"
    }
  ];

  it("Add a comment", () => {
    const wrapper = mount(
      <Comments postId="the_hundreds" currentPersona="Zac" author="Zac" />
    );
    localStorage.setItem("comments", JSON.stringify(fejkComment));
   
    wrapper.instance().setCommentsFromLocalStorage();
    expect(localStorage.getItem).toHaveBeenCalled();

    const fetchEm = api.fetchAllCommments();
    expect(fetchEm).toHaveLength(1);

    expect(wrapper.state().comments).toHaveLength(1);
  });

  it("Test remove a comment", () => {
    const wrapper = mount(
      <Comments postId="the_hundreds" currentPersona="Zac" author="Zac" />
    );
    localStorage.setItem("comments", JSON.stringify(fejkComment));
    wrapper.instance().setCommentsFromLocalStorage();

    const fetchEm = api.fetchAllCommments();
    expect(fetchEm).toHaveLength(1);
    expect(wrapper.state().comments).toHaveLength(1);
    
    api.removeComment = jest.fn();
    wrapper.instance().removeComment();
    expect(api.removeComment).toHaveBeenCalledTimes(1);
  });
  
  it("Render My comment", () => {
  const wrapper = mount(
    <Comments postId="the_hundreds" currentPersona="Zac" author="Zac" />
  );
  wrapper.setState({ comments: fejkComment });
  wrapper.instance().renderCommentList(fejkComment);
  expect(wrapper.find('SingleComment').html()).toContain("My comment");
});
});
