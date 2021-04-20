import React from 'react'
import { mount } from 'enzyme'
import { FormatMetaData, FormatDateTimeItem } from './MetaDataHelpers'

describe('Components: MetaDataHelpers', () => {
  describe('FormatDateTimeItem', () => {
    it('displays correctly', () => {
      const wrapper = mount(<FormatDateTimeItem value={1562950282} label="Date" />)
      expect(wrapper.find('.label').text()).toBe('Date')
      expect(wrapper).toBeDefined()
    })

    it('shows an error when date is in the future', () => {
      const wrapper = mount(<FormatDateTimeItem value={7562950282} label="Date" validation="FUTURE" />)
      expect(wrapper.find('.container').props().className).toBe('container datetime alert')
    })

    it('shows and error when date is in the past', () => {
      const wrapper = mount(<FormatDateTimeItem value={1562950282} label="Date" validation="PAST" />)
      expect(wrapper.find('.container').props().className).toBe('container datetime alert')
    })
  })

  describe('FormatMetaData', () => {
    it('displays correctly', () => {
      const wrapper = mount(<FormatMetaData value="theValue" label="theLabel" />)
      expect(wrapper.find('.label').text()).toBe('theLabel')
      expect(wrapper.find('.value').text()).toBe('theValue')
    })

    it('adds custom className', () => {
      const wrapper = mount(<FormatMetaData value="theValue" label="theLabel" className="customClass" />)
      expect(wrapper.find('.container').props().className).toBe('container customClass')
    })
  })
})
