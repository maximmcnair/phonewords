import React from 'react'
import {shallow} from 'enzyme'

import NumberPad from './NumberPad'

it('should render correct amount of children', () => {
  const wrapper = shallow(<NumberPad />)

  expect(wrapper.find('.numberpad').children().length).toEqual(12)
})
