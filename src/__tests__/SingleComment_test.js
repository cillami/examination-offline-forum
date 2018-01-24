import React from 'react';
import { render, shallow, mount } from 'enzyme';
import App from '../components/App';
import SingleComment from '../components/SingleComment';

test('renders the app', () => {
  render(<App />);
});

// it('should set img as zac', ()  => {

//     // key should be id 

//     // author should also be current persona 

//     // classname should be comment 
//     const currentPersona = 'Zac'; 
//     const author = "evelinasundin";
//     const id = "5";
//     const comment = "tja"; 
//     const date = "2017-06-12";
//     const wrapper = shallow(<SingleComment currentPersona={currentPersona} author={author} id={id} date={date} comment={comment} />);
//     expect(wrapper.find('img').html()).toContain("zac");
// })

// it('key should be id', () => {
//     const currentPersona = 'Zac'; 
//     const author = "evelinasundin";
//     const id = "5";
//     const comment = "tja"; 
//     const date = "2017-06-12";
//     const wrapper = mount(<SingleComment currentPersona={currentPersona} author={author} id={id} key={id} date={date} comment={comment} onClick={() => {}}  />);
//     console.log(
    
//     expect(wrapper.find('key').html()).toEqual("5");
// });
