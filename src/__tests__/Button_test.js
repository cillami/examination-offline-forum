import React from "react";
import { mount } from "enzyme";
import Button from "../components/Button";

it("test button", () => {
  const fakeClick = jest.fn();
  const buttonDanger = true;
  const wrapper = mount(
    <Button onClick={fakeClick} danger={buttonDanger} >
      <div> children </div>
    </Button>
  );
  expect(wrapper.find("button").hasClass("bg-red-dark")).toEqual(true);
});
