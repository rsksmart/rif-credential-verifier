import React from 'react'
import { mount } from 'enzyme'
import CredentialDisplay from './CredentialDisplay'
import mocks from '../tests/credentials.json'
import { waitForUseEffect } from '../tests/waitForUseEffect'

describe('Component: CredentialDisplay', () => {
  const sharedProps = { verifyVerifiableJwt: jest.fn() }

  it('renders the component', () => {
    const wrapper = mount(<CredentialDisplay {...sharedProps} />)
    expect(wrapper).toBeDefined()
  })

  it('shows a generic error', async () => {
    const handle = () => Promise.reject(new Error('Generic Error'))
    const wrapper = await mount(<CredentialDisplay verifyVerifiableJwt={handle} jwt={mocks.credential.jwt} />)
    await waitForUseEffect(wrapper)
    expect(wrapper.find('.error').find('p').text()).toBe('Generic Error')
  })

  it('attempts to verify the jwt', async () => {
    const verifyVerifiableJwt = jest.fn()
    const handle = () => {
      verifyVerifiableJwt()
      return Promise.resolve(mocks.credential.credential)
    }
    const wrapper = mount(<CredentialDisplay verifyVerifiableJwt={handle} jwt={mocks.credential.jwt} />)
    await waitForUseEffect(wrapper)

    const decoded = wrapper.find('.panel.credential')
    expect(decoded.find('h3').text()).toBe('VerifiableCredential: Email')
    expect(decoded.find('.label').at(0).text()).toBe('Issuer')
    expect(decoded.find('.value').at(0).text()).toBe('did:ethr:rsk:testnet:0x3dd03d7d6c3137f1eb7582ba5957b8a2e26f304a')
    expect(decoded.find('.label').at(1).text()).toBe('Issued At')
  })

  it('shows an error and offers to retry with button', async () => {
    const handle = () => Promise.reject(new Error('Signature invalid for JWT'))
    const wrapper = await mount(<CredentialDisplay verifyVerifiableJwt={handle} jwt={mocks.credential.jwt} />)
    await waitForUseEffect(wrapper)
    expect(wrapper.find('.error').find('p').text()).toBe('Signature invalid for JWT')
    expect(wrapper.find('.error').find('button').text()).toBe('Try again with eth sign.')
  })
})
