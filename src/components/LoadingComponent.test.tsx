import React from 'react'
import { mount } from 'enzyme'
import LoadingComponent from './LoadingComponent'

describe('Component: LoadingComponent', () => {
  it('renders the component', () => {
    const wrapper = mount(<LoadingComponent />)
    expect(wrapper).toBeDefined()
  })
})
