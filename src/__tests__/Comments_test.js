import React from 'react';
import { shallow, mount } from 'enzyme';
import Comments from '../components/Comments';

it.skip('test', () => {
    const fakeComment = [
        {
          id: "1",
          title:
            "My title",
          comment: "My content",
          currentPersona: "",
          author: "",
          date: "1999-12-31"
        }
      ];
})

it("test to render comments", () => {
    const fakeComment = [
      {
        comment: "My comment",
        id: "0",
        author: "Zac",
        currentPersona: "Zac",
        date: "1999-12-31"
      }
    ];
  
    const wrapper = shallow(<Comments postId="1" currentPersona="Zac" author="Zac" />);
    wrapper.setState({ comments: fakeComment });
    wrapper.instance().renderCommentList(fakeComment);
    const findMyComment = wrapper.find("article").first();
    expect(findMyComment.text()).toContain("My comment");
  });




  

