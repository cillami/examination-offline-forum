import React from 'react';
import { mount } from 'enzyme';
import Message from '../../components/Bot/Message';

describe("message tests", () => {

it('should render message from user with right class', () => {
    // bot is false therefor user 
    const wrapper = mount(<Message bot={false} message="hey you" />); 
    expect(wrapper.find('p .bg-indigo-dark').text()).toEqual("hey you");
});

it('should render message from bot with right class', () => {
    const wrapper = mount(<Message bot message="hey bot" />); 
    expect(wrapper.find('p .bg-white').text()).toEqual("hey bot");
});

it('should not render message from bot with wrong class', () => {
    // bot i true therefor it should have class bg-white, not bg-indigo-dark
    const wrapper = mount(<Message bot message="hey you" />); 
    expect(wrapper.find('p .bg-indigo-dark')).not.toHaveLength(1);
});

});