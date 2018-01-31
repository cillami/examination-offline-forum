import React from "react";
import { shallow } from "enzyme";
import SinglePost from "../components/SinglePost";

describe("test", () => {
  it("test if class exists", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <SinglePost
        onClick={onClick} id="0" title="My title" content="My content" author="hen" date="1999-12-31" currentPersona="hen" />
      );
    expect(wrapper.find("div").hasClass("w-full shadow p-6 m-6 border rounded relative")).toBeTruthy();
  });

  it('test onClick id', () =>{
    const onClick = jest.fn();
    const wrapper = shallow(
      <SinglePost
        onClick={onClick} id="0" title="My title" content="My content" author="hen" date="1999-12-31" currentPersona="hen"
      />);

      wrapper.find('.absolute').simulate('click');
      expect(onClick).toHaveBeenCalledWith('0');
})
});
