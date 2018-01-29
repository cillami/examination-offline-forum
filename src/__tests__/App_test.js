import React from "react";
import { shallow, mount } from "enzyme";
import App from "../components/App";

describe("App persona tests", () => {

  it("should render App with currentPersona", () => {
    const currentPerson = "Zac";
    const wrapper = shallow(<App />);
    // Sets currentPerson to currentPersona in state
    wrapper.setState({ currentPersona: currentPerson });
    // Expect currentPersona in state to be Zac
    const person = wrapper.state().currentPersona;
    expect(person).toBe("Zac");
  });

  it("should be able to change persona", () => {
    const wrapper = mount(<App />);
    // Calls the function changePersona and sets value as Esmeralda
    wrapper.instance().changePersona({ target: { value: "Esmeralda" } });
    // Sets currentPersona from function which now is Esmeralda to state
    // const { currentPersona } = wrapper.state();
    expect(wrapper.state().currentPersona).toBe("Esmeralda");
  });
});

describe("App page tests ", () => {
  it("should change page from home to bot and bot to home", () => {

    const wrapper = mount(<App />);

    // Sets current page to homepage in state
    wrapper.setState({ currenPage: "home" });
    // Calls the function changePage
    wrapper.instance().changePage();
    expect(wrapper.state().currentPage).toBe("bot");

<<<<<<< HEAD
=======
    // Sets current page to bot in state
    wrapper.setState({ currenPage: "bot" });
    // Calls the function changePage
    wrapper.instance().changePage();
    expect(wrapper.state().currentPage).toBe("home");
  });

>>>>>>> ef84e9e891a56a2447e651ad83b619efe76598d5
});
