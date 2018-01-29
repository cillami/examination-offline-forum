import React from 'react';
import { mount } from 'enzyme';
import Bot from '../../components/Bot/Bot';


describe('should check if user message = message in state', () => {

it('should check if messages match', () => {
    const wrapper = mount(<Bot />);
    const coolmessage = "Evelina";
    wrapper.instance().onSubmit(coolmessage);
    expect(wrapper.state().messages[0]).toEqual({message: 'Evelina', bot: false});
});

it('should check if messages dont match ', () => {
    const wrapper = mount(<Bot />);
    const coolmessage = "Cilla";
    wrapper.instance().onSubmit(coolmessage);
    expect(wrapper.state().messages[0]).not.toEqual({message: 'Evelina', bot: false});
});

});