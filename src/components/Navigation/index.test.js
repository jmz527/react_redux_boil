// React
import React from 'react';

// React Router
import { Link, MemoryRouter } from 'react-router-dom';

// Enzyme
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Custom
import Navigation from './index.js';

configure({adapter: new Adapter()});

describe('<Navigation />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
  });

  it('should render 5 <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(5);
  });

  it('should render a Home <Link />', () => {
    expect(wrapper.find(Link).filter({to: '/'}).text()).toEqual('Home');
  });

  it('should render a About <Link />', () => {
    expect(wrapper.find(Link).filter({to: '/about'}).text()).toEqual('About');
  });

  it('should render a Topics <Link />', () => {
    expect(wrapper.find(Link).filter({to: '/topics'}).text()).toEqual('Topics');
  });
});
