import React from 'react';
import { shallow } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';

describe("test all avatars", () => {

it('should set img as zac', ()  => {
    const wrapper = shallow(<AvatarSelector currentPersona="Zac" />);
    expect(wrapper.find('img').html()).toContain("zac");
})

it('should set img as esmeralda', ()  => {
    const wrapper = shallow(<AvatarSelector currentPersona="Esmeralda" />);
    expect(wrapper.find('img').html()).toContain("esmeralda");
})

it('should set img as morgana', ()  => {
    const currentPersona = 'Morgana'; 
    const wrapper = shallow(<AvatarSelector currentPersona={currentPersona} />);
    expect(wrapper.find('img').html()).toContain("morgana");
})

it('should not set img as zac if current person is morgana', () => {
    const currentPersona = 'Morgana'; 
    const wrapper = shallow(<AvatarSelector currentPersona={currentPersona} />);
    expect(wrapper.find('img').html()).not.toContain("zac");
});

});