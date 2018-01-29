import * as api from "../../api/";

describe("post tests", () => {
  afterEach(() => {
    localStorage.clear();
  });

  beforeEach(() => {
    localStorage.clear();
  });

  const fakePosts = [
    {
      id: "1",
      title: "post1",
      content: "content1",
      author: "evelina",
      date: "2018-01-29"
    },
    {
      id: "2",
      title: "post2",
      content: "content2",
      author: "cilla",
      date: "2018-01-30"
    }
  ];

  it("should return all post from local storage", () => {
    localStorage.setItem("posts", JSON.stringify(fakePosts));
    expect(api.fetchAllPosts()).toEqual(fakePosts);
  });

  it("should be able to remove posts from localstorage", () => {
    localStorage.setItem("posts", JSON.stringify(fakePosts));
    // removes first post in array
    api.removePost("1");
    // the only post left is the second post
    expect(localStorage.getItem("posts")).toContain("post2");
  });
}); // end of description post tests

describe("persona tests", () => {
  afterEach(() => {
    localStorage.clear();
  });

  beforeEach(() => {
    localStorage.clear();
  });

  it("should be able to return all persons in localstorage", () => {
    const persons = [{ name: "Evelina" }, { name: "Cilla" }];
    localStorage.setItem("personas", JSON.stringify(persons));
    expect(api.fetchPersonas()).toEqual(persons);
  });

  it("should be able to return all persons in localstorage", () => {
    const persons = [{ name: "Evelina" }, { name: "Cilla" }];
    localStorage.setItem("personas", JSON.stringify(persons));
    expect(api.fetchPersonas()).toEqual(persons);
  });

it('should return empty array of personas from localStorage', () => {
    expect(api.fetchPersonas()).toHaveLength(0);
  });


});
