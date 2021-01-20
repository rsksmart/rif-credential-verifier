import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App test', () => {
  it('renders the component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  })

  describe('header', () => {
    it('loads the SVG image without character issues', () => {
      const wrapper = shallow(<App />)
      const image = wrapper.find('.header').find('img')
      expect(image.props().alt).toBe('RIF Credential Viewer')
      expect(image.props().src).toBe('rif-credential-viewer.svg')
    })
  })

  describe('footer', () => {
    it('has copyright info and image', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find('.footer').find('img').props().alt).toBe('Powered By RIF')
      expect(wrapper.find('.footer').find('p').at(0).text()).toBe('Copyright © 2021 IOV Labs. All rights reserved.')
    })
  })
})
