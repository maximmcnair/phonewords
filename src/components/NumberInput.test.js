import React from 'react'
import {shallow} from 'enzyme'

import NumberInput from './NumberInput'

it('should render value', () => {
  const wrapper = shallow(<NumberInput value={'1'} />)

  expect(wrapper.find('.numberinput').prop('value')).toEqual('1')
})

it('should call handleChange() on form change', () => {
  // create mock function to pass in
  const handleChange = jest.fn()

  const wrapper = shallow(<NumberInput handleChange={handleChange} />)

  // simulate click event
  wrapper.find('.numberinput').simulate(
    'change',
    {target: {name: 'test', value: '4'}}
  )

  // expect complete fn to have been called
  expect(handleChange.mock.calls.length).toEqual(1)
  expect(handleChange.mock.calls[0][0]).toEqual('4')
})
