import React from "react";
import { mount , render, shallow} from "enzyme";
import Button from "../components/Button";
import toJSON from 'enzyme-to-json';

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


