import React from "react";
import { shallow, mount, render } from "enzyme";
import CreateNewPost from "../components/CreateNewPost";

describe("Testing", () => {
  it("Test onChange when using input and textarea", () => {
    const author = "cilla";
    const onChange = jest.fn();
    const title = { name: "title", value: "My title" };
    const content = { name: "content", value: "My content" };
    const wrapper = shallow(
      <CreateNewPost updatePosts={onChange} author={author} />
    );

    wrapper.find('input[name="title"]').simulate("change", { target: title });
    wrapper
      .find('textarea[name="content"]')
      .simulate("change", { target: content });

    expect(wrapper.find({ target: title })).toBeTruthy();
    expect(wrapper.find({ target: content })).toBeTruthy();
  });

  it("Test submit", () => {
    const author = "cilla";
    const onSubmit = jest.fn();
    const wrapper = shallow(
      <CreateNewPost updatePosts={onSubmit} author={author} />
    );
    wrapper.find("form").simulate("submit", { preventDefault: onSubmit });
    expect(onSubmit).toBeCalled();
  });
});
