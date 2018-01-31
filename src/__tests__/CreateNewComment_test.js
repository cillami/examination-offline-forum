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
    const onSubmit = jest.fn();
    const wrapper = shallow(
      <CreateNewComment
        updateComments={onSubmit}
        author="Rakim"
        postId="0"
      />
    );
    wrapper.find("form").simulate("submit", { preventDefault: onSubmit });
    expect(onSubmit).toBeCalled();
  });

  it("Test submit", () => {

    const fejk = [
      {
        comment: "My comment",
        id: "tretton",
        author: "Zac",
        currentPersona: "Zac",
        date: "1999-12-31",
        postId: "the_hundreds"
      }];

    const onSubmit = jest.fn();
    const wrapper = shallow(
      <CreateNewComment
        updateComments={onSubmit}
        author="Rakim"
        postId="0"
      />
    );

    wrapper.setState({ comment: fejk });
    expect(wrapper.state().comment[0].comment).toContain("My comment");
    console.log(wrapper.state().comment[0].comment)
    // wrapper.find("form").simulate("submit", { preventDefault: onSubmit });
    // expect(onSubmit).toBeCalled();
  });