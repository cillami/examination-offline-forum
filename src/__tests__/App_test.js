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
    const { currentPersona } = wrapper.state();
    // Expect currentPersona in state to be Esmeralda 
    expect(currentPersona).toBe("Esmeralda");
  });
});

describe("App page tests ", () => {
  it('should change page', () => {
    const wrapper = mount(<App />);
    // Sets current page to homepage in state 
    const { currentPage: homePage } = wrapper.state();
    expect(homePage).toBe("home");
    // Calls the function changePage
    wrapper.instance().changePage();
    // Sets currentpage in state 
    const { currentPage } = wrapper.state();
    // After function is called currentPage should be bot
    expect(currentPage).toBe("bot");
  });

});
