import React from "react";
import { shallow, mount } from "enzyme";
import Comments from "../components/Comments";
import * as api from "../api/";

describe("test add and remove comment", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  const fejk = [
    {
      comment: "My comment",
      id: "tretton",
      author: "Zac",
      currentPersona: "Zac",
      date: "1999-12-31",
      postId: "the_hundreds"
    },
    {
      comment: "My comment",
      id: "femtio",
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
    // const shejk = JSON.stringify(fejk);
    localStorage.setItem("comments", JSON.stringify(fejk));

    wrapper.instance().setCommentsFromLocalStorage();
    // expect(localStorage.getItem).toHaveBeenCalled();
    expect(wrapper.state().comments).toHaveLength(2);
  });

  it("Test remove comments", () => {
    const wrapper = mount(
      <Comments postId="the_hundreds" currentPersona="Zac" author="Zac" />
    );

    localStorage.setItem("comments", JSON.stringify(fejk));
    wrapper.instance().setCommentsFromLocalStorage();

    const fetchEm = api.fetchAllCommments();
    expect(fetchEm).toHaveLength(2);
    console.log(fetchEm)

    console.log(wrapper.state().comments);
    expect(wrapper.state().comments).toHaveLength(2);
    wrapper.instance().removeComment("the_hundreds");
    console.log(wrapper.state().comments);
    // all the comments disappears
    expect(wrapper.state().comments).toEqual([]);
  });
});
