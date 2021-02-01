import React from 'react'
import { mount } from 'enzyme'
import PresentationDisplay from './PresentationDisplay'
import mocks from '../tests/credentials.json'
import { JWTVerified } from 'jesse-did-jwt'

describe('Component: PresentationDisplay', () => {
  const sharedProps = {
    verifyVerifiableJwt: jest.fn(),
    presentation: mocks.presentation.presentation as JWTVerified
  }

  it('renders the component', () => {
    const wrapper = mount(<PresentationDisplay {...sharedProps} />)
    expect(wrapper).toBeDefined()
    expect(wrapper.find('h3').text()).toBe('VerifiablePresentation')
    expect(wrapper.find('.label').at(0).text()).toBe('Issuer')
    expect(wrapper.find('.value').at(0).text()).toBe('did:ethr:rsk:testnet:0x3dd03d7d6c3137f1eb7582ba5957b8a2e26f304a')
  })
})
