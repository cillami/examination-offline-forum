import React from "react";
import { shallow, mount, render } from "enzyme";
import CreateNewComment from "../components/CreateNewComment";

describe("Testing", () => {
  it("Test onChange when using input and textarea", () => {
    const author = "cilla";
    const onChange = jest.fn();
    const postId = "a string";
    const commentInput = { name: "comment", value: "My content" };
    const wrapper = shallow(
      <CreateNewComment
        updateComments={onChange}
        author={author}
        postId={postId}
      />
    );

    wrapper
      .find('textarea[name="comment"]')
      .simulate("change", { target: commentInput, postId });
    wrapper
      .find('textarea[name="comment"]')
      .simulate("change", { target: commentInput, postId });

    expect(wrapper.find({ target: commentInput, postId })).toBeTruthy();
  });

  it("Test submit", () => {
    const author = "cilla";
    const postId = "a string";
    const onSubmit = jest.fn();
    const wrapper = shallow(
      <CreateNewComment
        updateComments={onSubmit}
        author={author}
        postId={postId}
      />
    );
    wrapper
      .find("form")
      .simulate("submit", { preventDefault: onSubmit, postId });
    expect(onSubmit).toBeCalled();
  });
});
