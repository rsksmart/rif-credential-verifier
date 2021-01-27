import React from 'react'
import { mount } from 'enzyme'
import UserInput from './UserInput'

describe('Component: UserInput', () => {
  const sharedProps = { disabled: false, handleDecode: jest.fn() }
  it('renders the component', () => {
    const wrapper = mount(<UserInput {...sharedProps} />)
    expect(wrapper).toBeDefined()
  })

  it('returns the input the user typed', () => {
    const handleDecode = jest.fn()
    const wrapper = mount(<UserInput {...sharedProps} handleDecode={handleDecode} />)
    wrapper.find('.userInput').simulate('change', { target: { value: 'value' } })
    wrapper.find('.submit').simulate('click')

    expect(handleDecode).toBeCalledWith('value', true)
  })

  it('sends useEth as false', () => {
    const handleDecode = jest.fn()
    const wrapper = mount(<UserInput {...sharedProps} handleDecode={handleDecode} />)
    wrapper.find('.userInput').simulate('change', { target: { value: 'value' } })
    wrapper.find('.ethSignCheck').simulate('change', { target: { checked: false } })

    wrapper.find('.submit').simulate('click')
    expect(handleDecode).toBeCalledWith('value', false)
  })

  it('sets the initial text', () => {
    const wrapper = mount(<UserInput {...sharedProps} initialText="hello" />)
    expect(wrapper.find('.userInput').props().value).toBe('hello')
  })

  it('removes spaces and line breaks', () => {
    const handleDecode = jest.fn()
    const wrapper = mount(<UserInput {...sharedProps} handleDecode={handleDecode} />)
    wrapper.find('.userInput').simulate('change', { target: { value: 'value ' } })
    wrapper.find('.submit').simulate('click')
    expect(handleDecode).toBeCalledWith('value', true)
  })
})
