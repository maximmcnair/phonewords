import React from 'react'
import {shallow} from 'enzyme'

import NumberClear from './NumberClear'

it('should call handleClear() on click', () => {
  // create mock function to pass in
  const handleClear = jest.fn()

  const wrapper = shallow(<NumberClear handleClear={handleClear} />)

  // simulate click event
  wrapper.find('.numberclear__btn').simulate('click')

  // expect complete fn to have been called
  expect(handleClear.mock.calls.length).toEqual(1)
})
