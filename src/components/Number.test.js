import React from 'react'
import {shallow} from 'enzyme'

import Number from './Number'

it('should render number', () => {
  const wrapper = shallow(
    <Number
      number="3"
    />
  )

  expect(wrapper.contains('3')).toEqual(true)
})

it('should add hightlight class', () => {
  const wrapper = shallow(
    <Number
      number="3"
      highlight={true}
    />
  )

  expect(wrapper.find('.numberpad__number__text').hasClass('numberpad__number__text--highlight')).toEqual(true)
})

it('should NOT add hightlight class', () => {
  const wrapper = shallow(
    <Number
      number="3"
      highlight={false}
    />
  )

  expect(wrapper.find('.numberpad__number__text').hasClass('numberpad__number__text--highlight')).toEqual(false)
})

it('should call handleOnClick() on click', () => {
  // create mock function to pass in
  const handleOnClick = jest.fn()

  const wrapper = shallow(
    <Number
      number="3"
      highlight={true}
      handleOnClick={handleOnClick}
    />
  )

  // simulate click event
  wrapper.find('.numberpad__number').simulate('click')

  // expect complete fn to have been called
  expect(handleOnClick.mock.calls.length).toEqual(1)
})
