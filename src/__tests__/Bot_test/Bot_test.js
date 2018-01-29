import React from 'react';
import { shallow } from 'enzyme';
import Bot from '../../components/Bot/Bot';

//   it('should render my message on screen', ()=> {
//     const wrapper = shallow(<Bot />);
//     wrapper.instance().onSubmit('Hello this is a massage');
//     expect(wrapper.html()).toContain('Meko');
//   });

describe('testing the Bot component', ()=>{
    const component = <Bot />;

it('renders messages', ()=>{
    const wrapper = shallow(component);
    const bot = false;
    const messages = [{message: 'hi', bot}, {message:'hello', bot}, {message:'see you!', bot}];
    wrapper.setState({ messages });
    expect(wrapper.find('Message').first().props().message).toContain(messages[0].message);
});

});