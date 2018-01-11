import React from 'react'
import {shallow, mount} from 'enzyme'

import App from './App'

beforeEach(() => {
  global.fetch = jest.fn()
})

afterEach(() => {
  global.fetch.mockRestore()
})

it('should render .wrapper by default', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find('.wrapper').length).toEqual(1)
})

it('should render error if fetchPhonewords errored', async () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.reject({error: 'Unknown error'}))

  const wrapper = shallow(<App />)

  // call instance.fetchPhonewords
  await wrapper.instance().fetchPhonewords()
  // force update
  wrapper.update()

  // matchesElement
  expect(wrapper.contains(<div><h2>Seems there was an error!</h2></div>)).toEqual(true)
})

it('should render phonewords', async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => {
        return ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
      }
    })
  )

  const wrapper = mount(<App />)

  // call instance.fetchPhonewords
  await wrapper.instance().fetchPhonewords()
  // force update
  wrapper.update()

  expect(wrapper.find('.phonewords').children().at(0).text()).toEqual('ad')
  expect(wrapper.find('.phonewords').children().at(1).text()).toEqual('ae')
  expect(wrapper.find('.phonewords').children().at(2).text()).toEqual('af')
  expect(wrapper.find('.phonewords').children().at(3).text()).toEqual('bd')
})

it('handleInput() should correctly update state', async () => {
  const wrapper = mount(<App />)

  await wrapper.instance().handleInput('1234')

  expect(wrapper.state('numbers')).toEqual('1234')
})

it('handleClick() should correctly update state', async () => {
  const wrapper = mount(<App />)

  wrapper.setState({numbers: '32'})

  await wrapper.instance().handleClick('4')

  expect(wrapper.state('numbers')).toEqual('324')
})

it('handleClear() should correctly update state', async () => {
  const wrapper = mount(<App />)

  wrapper.setState({
    numbers: '32',
    phonewords: ['ad', 'ae', 'af', 'bd']
  })

  await wrapper.instance().handleClear()

  expect(wrapper.state('numbers')).toEqual('')
  expect(wrapper.state('phonewords')).toEqual([])
})
