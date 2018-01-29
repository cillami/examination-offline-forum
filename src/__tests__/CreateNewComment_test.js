import React from "react";
import { shallow } from "enzyme";
import CreateNewComment from "../components/CreateNewComment";

  it("Test onChange when using input and textarea", () => {
    const onChange = jest.fn();
    const postId = "0";
    const commentInput = { name: "comment", value: "feel my fist of fury" };
    const wrapper = shallow(
      <CreateNewComment
        updateComments={onChange}
        author="bruce lee"
        postId={postId}
      />
    );

    wrapper.find('textarea[name="comment"]').simulate("change", { target: commentInput, postId });
    expect(wrapper.find({ target: commentInput, postId })).toBeTruthy();
  });

  it("Test submit", () => {
    const postId = "0";
    const onSubmit = jest.fn();
    const wrapper = shallow(
      <CreateNewComment
        updateComments={onSubmit}
        author="Rakim"
        postId={postId}
      />
    );
    wrapper.find("form").simulate("submit", { preventDefault: onSubmit });
    expect(onSubmit).toBeCalled();
  });
