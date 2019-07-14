import React from 'react';
import { mount } from 'enzyme';
import App from '../../src/App';

describe('App', () => {
  it('renders Hello, World!', () => {
    const wrapper = mount(<App />);
    const helloClassName = '.hello';
    expect(wrapper.find(helloClassName).text()).toContain('Hello, world!');
  });
});
