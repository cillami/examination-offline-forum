import React from "react";
import { shallow, mount } from "enzyme";
import Posts from "../components/Posts";



it("test to render posts", () => {
    
    const fakePost = [
        {
          id: "0",
          title:
            "My title",
          content: "My post",
          author: "Esmeralda",
          date: "1999-12-31"
        }
      ];
      
  const wrapper = shallow(
    <Posts currentPersona="haj" author="Esmeralda" />
  );
  wrapper.setState({ fakePost });
  wrapper.instance().renderPostList(fakePost);

  const findMyPost = wrapper.find('div > h2').first();

 expect(findMyPost.text()).toContain("My title");
});

 