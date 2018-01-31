import React from "react";
import { shallow } from "enzyme";
import CreateNewComment from "../components/CreateNewComment";

  it("Add comment", () => {
    const faker = jest.fn();
    const commentInput = { target: { name: "comment", value: "My comment" }};
    const wrapper = shallow(
      <CreateNewComment updateComments={faker} author="bruce lee" postId="0" />
    );
    wrapper.find('textarea[name="comment"]').simulate("change", commentInput);
   // expect(wrapper.find({ target: commentInput })).toBeTruthy();
    expect(wrapper.state().comment).toContain("My comment");
  });


  it("Test submit", () => {
    const faker = jest.fn();
    const wrapper = shallow(
      <CreateNewComment updateComments={faker} author="Rakim" postId="0" />
    );
    wrapper.find("form").simulate("submit", { preventDefault: faker });
    expect(faker).toBeCalled();
  });