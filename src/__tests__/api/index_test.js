import * as api from "../../api/";
//Instructs Jest to use fake versions of the standard timer functions
jest.useFakeTimers();

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

//   it("should be able to return all persons in localstorage", () => {
//     const persons = [{ name: "Evelina" }, { name: "Cilla" }];
//     localStorage.setItem("personas", JSON.stringify(persons));
//     expect(api.fetchPersonas()).toEqual(persons);
//   });

it('should return empty array if a person i local storage has not been set', () => {
    expect(api.fetchPersonas()).toHaveLength(0);
  });


});

describe('Test bot', () => {

  jest.useFakeTimers();

  it('Promise should return an object with bot message', () => {
    // Get a random botReply
    const botReply = api.botReply();
    // Fast-forward until all timers have been executed
    jest.runAllTimers();
    // make sure to add a return statement
    return expect(botReply).resolves.toEqual(
      // matches any received object that recursively matches the expected properties
        expect.objectContaining({
        bot: true,    
        // Instead of literal property values in the expected object, you can use matchers, expect.any()
        message: expect.any(String)
      })
    )
  });
});
