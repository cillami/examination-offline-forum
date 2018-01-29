import React from "react";
import { mount } from "enzyme";
import * as api from "../../api/";

describe("post tests", () => {

  afterEach(() => {
    localStorage.clear();
  });

  const fakePosts = [
    {
      id: "0",
      title: "post1",
      content: "content1",
      author: "evelina",
      date: "2018-01-29"
    },
    {
      id: "1",
      title: "post2",
      content: "content2",
      author: "cilla",
      date: "2018-01-30"
    }
  ];

  it('should return a post from localStorage', ()=> {
    localStorage.setItem('posts', JSON.stringify(fakePosts));
    expect(api.fetchAllPosts()).toEqual(fakePosts);
});


}); // end of description post tests
