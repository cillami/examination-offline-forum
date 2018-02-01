import React from "react";
import { mount } from "enzyme";
import MessageForm from "../../components/Bot/MessageForm";

describe("messageform tests", () => {

it("should update user input to be output", () => {
  const onSubmit = jest.fn();
  const wrapper = mount(<MessageForm onSubmit={onSubmit} />);
  wrapper
    .find('[name="userMessage"]')
    .simulate("change", { target: { name: "userMessage", value: "hejhej" } });
  expect(
    wrapper
      .find("input")
      .first()
      .prop("value")
  ).toBe("hejhej");
});

it("test submit", () => {
  const onSubmit = jest.fn();
  const wrapper = mount(
    <MessageForm userMessage={onSubmit} onSubmit={onSubmit} />
  );
  wrapper.find("form").simulate("submit", { preventDefault: onSubmit });
  expect(onSubmit).toBeCalled();
});

});