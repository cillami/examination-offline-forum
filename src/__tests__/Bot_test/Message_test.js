import React from 'react';
import { mount } from 'enzyme';
import Message from '../../components/Bot/Message';

describe("message tests", () => {

it('should render message from user with right class', () => {
    const wrapper = mount(<Message bot={false} message="hey you" />); 
    expect(wrapper.find('p .bg-indigo-dark').text()).toEqual("hey you");
});

it('should render message from bot with right class', () => {
    const wrapper = mount(<Message bot message="hey bot" />); 
    expect(wrapper.find('p .bg-white').text()).toEqual("hey bot");
});

it('should not render message from bot with wrong class', () => {
    const wrapper = mount(<Message bot message="hey you" />); 
    expect(wrapper.find('p .bg-indigo-dark')).not.toHaveLength(1);
});

});