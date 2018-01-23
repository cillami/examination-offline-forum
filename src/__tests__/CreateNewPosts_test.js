import React from 'react';
import { shallow } from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';

describe('Testing', ()  => {

    it('Test onChange when using input and textarea', () => {

    const author = "cilla";
    const onChange = jest.fn();
    const wrapper = shallow(<CreateNewPost updatePosts={onChange} author={author} />);

    wrapper.find('input[name="title"]').simulate('change', {target: {name: "title", value: "My title"}});
    wrapper.find('textarea[name="content"]').simulate('change', {target: {name: "content", value: "My content"}});  

    expect(wrapper.find({target: {name: "title", value: "My title"}})).toBeTruthy();
    expect(wrapper.find({target: {name: "content", value: "My content"}})).toBeTruthy();

});
});
 


