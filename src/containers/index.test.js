import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from '.';

describe('<HomeScreen>', () => {
  it('Header component should exists', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find('header')).toBeTruthy();
  });

  it('Content component should exists', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find('span')).toBeTruthy();
  });

  it('Footer component should exists', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find('div')).toBeTruthy();
  });
});
