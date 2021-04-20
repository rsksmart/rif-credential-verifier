import React from 'react'
import { mount } from 'enzyme'
import SchemaParserComponent from './SchemaParserComponent'

describe('Component: SchemaParserComponent', () => {
  it('renders the component', () => {
    const payload = {
      vc: {
        type: ['VerifiableCredential', 'Email'],
        credentialSubject: {
          emailAddress: 'jesse@iovlabs.org'
        }
      }
    }
    const wrapper = mount(<SchemaParserComponent payload={payload} />)
    expect(wrapper).toBeDefined()

    expect(wrapper.find('.label').text()).toBe('Email address')
    expect(wrapper.find('.value').text()).toBe('jesse@iovlabs.org')
    expect(wrapper.find('.alert')).toHaveLength(0)
  })

  it('returns invalid email', () => {
    const payload = {
      vc: {
        type: ['VerifiableCredential', 'Email'],
        credentialSubject: {
          name: 'Jesse Clark'
        }
      }
    }
    const wrapper = mount(<SchemaParserComponent payload={payload} />)
    expect(wrapper.find('.alert').text()).toBe('Invalid Email credential')
  })

  it('returns invalid schema when it is not known', () => {
    const payload = {
      vc: {
        type: ['VerifiableCredential', 'UnknownThing!'],
        credentialSubject: {
          name: 'Jesse Clark'
        }
      }
    }
    const wrapper = mount(<SchemaParserComponent payload={payload} />)
    expect(wrapper.find('.alert').text()).toBe('Invalid schema')
    expect(wrapper.find('.label').text()).toBe('name')
    expect(wrapper.find('.value').text()).toBe('Jesse Clark')
  })
})
