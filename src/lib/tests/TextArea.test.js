jest.unmock('../../lib/components/TextArea.js');

import React from 'react';
import {shallow} from 'enzyme';

import TextArea from '../../lib/components/TextArea.js';

describe('TextArea', () => {

  let wrapper = null;

  beforeEach(function() {
    wrapper = shallow(<TextArea></TextArea>);
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });
});
