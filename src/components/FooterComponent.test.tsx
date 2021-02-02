import React from 'react'
import { mount } from 'enzyme'
import FooterComponent from './FooterComponent'

describe('Component: FooterComponent', () => {
  it('renders the component', () => {
    const wrapper = mount(<FooterComponent />)
    expect(wrapper).toBeDefined()
  })

  it('has copyright info and image', () => {
    const wrapper = mount(<FooterComponent />)
    expect(wrapper.find('.footer').find('img').props().alt).toBe('Powered By RIF')
    expect(wrapper.find('.footer').find('p').at(0).text()).toBe('Copyright © 2021 IOV Labs. All rights reserved.')
  })
})
