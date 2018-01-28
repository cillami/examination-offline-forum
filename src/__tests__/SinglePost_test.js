import React from "react";
import { shallow } from "enzyme";
import SinglePost from "../components/SinglePost";

// id: '565ddy34',
// title: 'Everyday Hero: When This Pregnant Woman Couldn’t Find A Seat On A Train, This Man Decided To Stand On His In Solidarity',
// content: 'Well, this story absolutely proves that you don’t need a cape to be a hero.\n\nZack Clifton will tell you he’s just a normal guy, but his small humanitarian gesture on his morning commute yesterday shows just how extraordinary he really is. When the 25-year-old graphic designer saw a pregnant woman who couldn’t find a seat, he knew he had to do something about it. While others looked the other way, he decided to stand on his own seat in solidarity. \n\nSometimes it’s the smallest things that mean the most. It would have been easy for him to sit and do nothing, but instead Zack chose to make a difference. Climbing atop his seat, he set aside his own comfort to spend the remainder of the 45-minute commute in quiet solidarity with his fellow passenger. It was a simple act, but it sent an inspirational message of support that lasted long after the ride was over. \n\n“_I wanted to let her know that if she couldn’t sit, I wouldn’t sit either,_” said Zack, who almost never gets a seat in the morning, which makes his touching gesture that much more powerful. “_Sharing that hardship with her was the least I could do. We’re all in this together._” \n\n“_I wasn’t able to read my book,_” Zack added. \n\nWow! If only more people were so empathetic to pregnant women, the world would be a much better place. Zack has truly showed us all that no moment is too small to make a human connection with others. Share this story to encourage more people to do what’s right!',
// author: 'Esmeralda',
// date: (new Date()).toLocaleString()

describe("test", () => {
  it("test if class exists", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <SinglePost
        onClick={onClick}
        id="0"
        title="My title"
        content="My content"
        author="hen"
        date="1999-12-31"
        currentPersona="hen"
      />
    );
    expect(
      wrapper
        .find("div")
        .hasClass("w-full shadow p-6 m-6 border rounded relative")
    ).toBeTruthy();
  });

  it('test onClick id', () =>{
    const onClick = jest.fn();
    const wrapper = shallow(
      <SinglePost
        onClick={onClick}
        id="0"
        title="My title"
        content="My content"
        author="hen"
        date="1999-12-31"
        currentPersona="hen"
      />);

      wrapper.find('button .absolute').simulate('click');
      expect(onClick).toHaveBeenCalledWith('0');

})
});
