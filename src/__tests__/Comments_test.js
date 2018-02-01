import React from "react";
import { mount } from "enzyme";
import Comments from "../components/Comments";

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
    // expect(localStorage.getItem).toHaveBeenCalled();
    expect(wrapper.state().comments).toHaveLength(1);
  });

  it("Test remove a comment", () => {
    const wrapper = mount(
      <Comments postId="the_hundreds" currentPersona="Zac" author="Zac" />
    );

    localStorage.setItem("comments", JSON.stringify(fejkComment));
    wrapper.instance().setCommentsFromLocalStorage();

    // const fetchEm = api.fetchAllCommments();
    // expect(fetchEm).toHaveLength(1);
    // console.log(fetchEm)

    expect(wrapper.state().comments).toHaveLength(1);
    wrapper.instance().removeComment("Haru pass eller id?");
    expect(wrapper.state().comments).toEqual([]);
  });

});
