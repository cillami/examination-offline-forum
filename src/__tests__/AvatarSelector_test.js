import React from 'react';
import { shallow } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';
import esmeralda from '../images/esmeralda.png';
import zac from '../images/zac.png';
import morgana from '../images/morgana.png';

it('should set img as zac', ()  => {
    let currentPersona = 'Zac'; 
    let wrapper = shallow(<AvatarSelector currentPersona={currentPersona} />);
    expect(wrapper.find('img').html()).toContain("zac");
})

it('should set img as esmeralda', ()  => {
    let currentPersona = 'Esmeralda'; 
    let wrapper = shallow(<AvatarSelector currentPersona={currentPersona} />);
    console.log(AvatarSelector.currentPersona);
    expect(wrapper.find('img').html()).toContain("esmeralda");
})

it('should set img as morgana', ()  => {
    const currentPersona = 'Morgana'; 
    const wrapper = shallow(<AvatarSelector currentPersona={currentPersona} />);
    expect(wrapper.find('img').html()).toContain("morgana");
})