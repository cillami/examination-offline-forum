import React from 'react';
import { mount } from 'enzyme';
import MessageForm from '../../components/Bot/MessageForm';

it('should update user input ot be output', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(<MessageForm onSubmit={onSubmit} />);
    wrapper.find('[name="userMessage"]').simulate('change', {target:{name:'userMessage', value:'hejhej'}});
    expect(wrapper.find('input .shadow').prop('value')).toBe("hejhej");
}); 