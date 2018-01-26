import React from "react";
import { render, mount } from "enzyme";
import SingleComment from "../components/SingleComment";

// double this check test
it("button should exist when author and currentpersona is same", () => {
  const onClick = jest.fn();
  const wrapper = render(
    <SingleComment
      id="5"
      author="Evelina"
      onClick={onClick}
      currentPersona="Evelina"
      comment="Comment"
      date="2018-01-05"
    />
  );
  expect(wrapper.find("button")).toBeTruthy();
});

describe("test that onlick is being called with right id", () => {
  it("onlick should have been called with the right id ", () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <SingleComment
        id="5"
        author="Evelina"
        onClick={onClick}
        currentPersona="Evelina"
        comment="Comment"
        date="2018-01-05"
      />
    );
    wrapper.find("button").simulate("click");
    expect(onClick).toHaveBeenCalledWith("5");
  });

  it("onlick should not be called when wrong id ", () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <SingleComment
        id="7"
        author="Evelina"
        onClick={onClick}
        currentPersona="Evelina"
        comment="Comment"
        date="2018-01-05"
      />
    );
    wrapper.find("button").simulate("click");
    expect(onClick).not.toHaveBeenCalledWith("8");
  });
});
