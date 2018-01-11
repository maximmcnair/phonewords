import React from 'react'
import {shallow} from 'enzyme'

import Phonewords from './Phonewords'

it('should render words', () => {
  const wrapper = shallow(<Phonewords phonewords={['ae', 'ef']} />)

  expect(wrapper.find('.phonewords').children().at(0).text()).toEqual('ae')
  expect(wrapper.find('.phonewords').children().at(1).text()).toEqual('ef')
})
