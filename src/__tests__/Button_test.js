import React from "react";
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
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


it('should match snapshot', () => {
  const fakeClick = jest.fn();
  const noDanger = false;
  const wrapper = mount(
    <Button onClick={fakeClick} danger={noDanger} >
      <div> children </div>
    </Button>
  );
  expect(wrapper.find("button").hasClass("bg-red-dark")).toEqual(false);
  expect(toJSON(wrapper)).toMatchSnapshot();
});