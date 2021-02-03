import React from 'react'
import { mount } from 'enzyme'
import ShowRawComponent from './ShowRawComponent'

describe('Component: ShowRawComponent', () => {
  const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRW1haWwiXSwiY3JlZGVudGlhbFNjaGVtYSI6eyJpZCI6ImRpZDpldGhyOnJzazoweDhhMzJkYTYyNGRkOWZhZDhiZjRmMzJkOTQ1NmYzNzRiNjBkOWFkMjg7aWQ9MWViMmFmNmItMGRlZS02MDkwLWNiNTUtMGVkMDkzZjliMDI2O3ZlcnNpb249MS4wIiwidHlwZSI6Ikpzb25TY2hlbWFWYWxpZGF0b3IyMDE4In0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImVtYWlsQWRkcmVzcyI6Implc3NlQGlvdmxhYnMub3JnIn19LCJzdWIiOiJkaWQ6ZXRocjpyc2s6dGVzdG5ldDoweDNkZDAzZDdkNmMzMTM3ZjFlYjc1ODJiYTU5NTdiOGEyZTI2ZjMwNGEiLCJuYmYiOjE2MDgyMjExNDAsImlzcyI6ImRpZDpldGhyOnJzazoweEZjYzdlNjkxYjNiNjMxODI5Qzk2NDkwNTY5YWE1RjFFMzFlRkFmOGYifQ.omtFUQRGazaMBMkmzHX_X5WaU0qu_fRD8eux_E7nDjrxGXtAKxm-vZioHJdvd7BFF1oQuvzSue7aSVxf5osSIg'
  const sharedProps = { jwt }

  it('renders the component with valid JWT', () => {
    const wrapper = mount(<ShowRawComponent {...sharedProps} />)
    expect(wrapper).toBeDefined()
  })

  it('shows an error when the JWT is invalid', () => {
    const wrapper = mount(<ShowRawComponent jwt="broken" />)
    expect(wrapper.find('.alert').text()).toBe('Incorrect format JWT')
  })
})
