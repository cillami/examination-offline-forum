import React from "react";
import { render } from "enzyme";
import AvatarSelector from "../components/AvatarSelector";
import esmeralda from "../images/esmeralda.png";
import zac from "../images/zac.png";
import morgana from "../images/morgana.png";

test.skip("renders the app", () => {
  render(<App />);
});

describe("Should test images", () => {
  it("check img", () => {
    const currentPersona = "Zac";
    const wrapper = render(<AvatarSelector currentPersona={currentPersona}  />);
    


  });


});
