import React from "react";
import { shallow, mount } from "enzyme";
import Comments from "../components/Comments";
import * as api from "../api";

describe("test remove comment", () => {
  it("test", () => {

    const fakeComment = [
      {
        comment: "My comment",
        id: "0",
        author: "Zac",
        currentPersona: "Zac",
        date: "1999-12-31"
      }
    ];
    const wrapper = shallow(
      <Comments postId="0" currentPersona="Zac" author="Zac" />
    );
    localStorage.setItem("comments", fakeComment);
   // const getComment = api.fetchAllCommments();
    const fakeRemove = api.removeComment = jest.fn();
    expect(localStorage.getItem).toHaveBeenCalled();
    wrapper.instance().removeComment("0");
    expect(fakeRemove).toHaveBeenCalledWith("0");
  });

  it('', ()=>{

    const fakeComment = [
        {
          comment: "My comment",
          id: "0",
          author: "Zac",
          currentPersona: "Zac",
          date: "1999-12-31"
        }
      ];
      const wrapper = mount(
        <Comments postId="0" currentPersona="Zac" author="Zac" />
      );

      wrapper.setState({comments:fakeComment});
      wrapper.instance().renderCommentList(wrapper.state().comments);
      expect(wrapper.state().comments).toBe(fakeComment)



  })
});
