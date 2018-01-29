import React from "react";
import { render, mount } from "enzyme";
import SingleComment from "../components/SingleComment";

it("button should not exist when author and currentpersona is not the same", () => {
  const onClick = jest.fn();
  const sisterFromAnotherMister = "cilla";

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

  wrapper.setProps({currentPersona: sisterFromAnotherMister});
  expect(wrapper.find("button").exists()).toBeFalsy();
 
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
