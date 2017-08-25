import * as React from 'react'
import * as enzyme from 'enzyme'
import Hello from './Hello'

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name='Danielle' />)
  expect(hello.find(".greeting").text()).toEqual('Hello Danielle!')
})

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name='Danielle' enthusiasmLevel={1} />)
  expect(hello.find(".greeting").text()).toEqual('Hello Danielle!')
})

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name='Danielle' enthusiasmLevel={5} />)
  expect(hello.find(".greeting").text()).toEqual('Hello Danielle!!!!!')
})

it('throws error when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Danielle' enthusiasmLevel={0} />)
  }).toThrow()
})

it('throws error when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Danielle' enthusiasmLevel={-1} />)
  }).toThrow()
})

it('calls onIncrement when + button is clicked', () => {
  var spy = jest.fn()

  var props = {
    name: 'Danielle',
    enthusiasmLevel: 5,
    onIncrement: spy
  }

  const hello = enzyme.shallow(<Hello {...props} />)

  hello.find('button').at(1).simulate('click')
  expect(spy).toHaveBeenCalled
  // expect(hello.find('.greeting').text()).toEqual('Hello Danielle!!!!!!')
})

it('calls onDecrement when - button is clicked', () => {
  var spy = jest.fn()

  var props = {
    name: 'Danielle',
    enthusiasmLevel: 5,
    onIncrement: spy
  }

  const hello = enzyme.shallow(<Hello {...props} />)

  hello.find('button').at(0).simulate('click')
  expect(spy).toHaveBeenCalled
  // expect(hello.find('.greeting').text()).toEqual('Hello Danielle!!!!')
})
