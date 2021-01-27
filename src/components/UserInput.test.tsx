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
    wrapper.find('.userInput').simulate('change', { target: { value: 'myJWT' } })
    wrapper.find('.submit').simulate('click')

    expect(handleDecode).toBeCalledWith('myJWT', true)
  })
})
