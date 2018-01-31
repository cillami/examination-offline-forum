import React from "react";
import { shallow } from "enzyme";
import CreateNewPost from "../components/CreateNewPost";

describe("Testing", () => {
  it("Test input and textarea", () => {
    const faker = jest.fn();
    const title = { name: "title", value: "My title" };
    const content = { name: "content", value: "My content" };
    const wrapper = shallow(
      <CreateNewPost updatePosts={faker} author="" />
    );

    wrapper.find('input[name="title"]').simulate("change", { target: title });
    wrapper.find('textarea[name="content"]').simulate("change", { target: content });

    expect(wrapper.state().title).toContain("My title");
    expect(wrapper.state().content).toContain("My content");
  });

  it("Test submit", () => {
    const faker = jest.fn();
    const wrapper = shallow(
      <CreateNewPost updatePosts={faker} author="Hayao Miyazaki" />
    );
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(faker).toBeCalled();
  });
});
