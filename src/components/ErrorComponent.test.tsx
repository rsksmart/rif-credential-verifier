import React from 'react'
import { mount } from 'enzyme'
import ErrorComponent from './ErrorComponent'

describe('Component: ErrorComponent', () => {
  const sharedProps = { message: 'error text' }
  it('renders the component, displays text and has correct className', () => {
    const wrapper = mount(<ErrorComponent {...sharedProps} />)
    expect(wrapper).toBeDefined()

    expect(wrapper.find('p').text()).toBe('error text')
    expect(wrapper.find('p').props().className).toBe('alert')
  })
})
