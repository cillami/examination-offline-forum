import React from "react";
import { render, mount } from "enzyme";
import SingleComment from "../components/SingleComment";

describe('button test', () => {

  function renderButton(currentPersona, author){
  const onClick = jest.fn();
  const wrapper = mount(
    <SingleComment
      id="5"
      author={author}
      onClick={onClick}
      currentPersona={currentPersona}
      comment="Comment"
      date="2018-01-05"
    />
  );
  return wrapper
}
it("button should not exist when author and currentpersona is not the same", () => {
  expect(renderButton("Evelina", "Cilla").find("button").exists()).toBeFalsy();
});

it("button should exist when author and currentpersona is the same", () =>{
  expect(renderButton("Cilla", "Cilla").find("button").exists()).toBeTruthy();
})
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
