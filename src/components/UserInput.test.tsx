import React from 'react'
import { mount } from 'enzyme'
import UserInput from './UserInput'
import { appStatus } from '../state'

describe('Component: UserInput', () => {
  const sharedProps = { status: appStatus.START, handleDecode: jest.fn() }
  it('renders the component', () => {
    const wrapper = mount(<UserInput {...sharedProps} />)
    expect(wrapper).toBeDefined()
  })

  it('returns the input the user typed', () => {
    const handleDecode = jest.fn()
    const wrapper = mount(<UserInput {...sharedProps} handleDecode={handleDecode} />)
    wrapper.find('.userInput').simulate('change', { target: { value: 'myJWT' } })
    wrapper.find('.submit').simulate('click')

    expect(handleDecode).toBeCalledWith('myJWT')
  })
})
