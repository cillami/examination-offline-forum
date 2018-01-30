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

describe("comments tests", () => {
    afterEach(() => {
      localStorage.clear();
    });
  
    beforeEach(() => {
      localStorage.clear();
    });
  
    const fakeComments = [
      {
        comment: 'This is a comment',
        id: '1', 
        postId: '3',
        author: 'evelina',
        date: '2018-01-20'
      },
      {
        comment: 'This is another a comment',
        id: '2', 
        postId: '5',
        author: 'cilla',
        date: '2018-03-25'
      }
    ];
  
    it("should return all comments from local storage", () => {
      localStorage.setItem("comments", JSON.stringify(fakeComments));
      expect(api.fetchAllCommments()).toEqual(fakeComments);
    });

    it("should be able to remove posts from localstorage", () => {
        localStorage.setItem("comments", JSON.stringify(fakeComments));
        // removes first post in array
        api.removePost("5");
        // the only post left is the second post
        expect(localStorage.getItem("comments")).toContain("This is a comment");
      });
  }); // end of description comments tests

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

it('should return empty array if a person i local storage has not been set', () => {
    expect(api.fetchPersonas()).toHaveLength(0);
  });

});



