import { Resolver } from 'did-resolver'
import { getResolver } from 'ethr-did-resolver'
import { verifyJWT, decodeJWT, JWTPayload } from 'jesse-did-jwt'
import { parseVerifiableCredential } from 'jesse-vc-json-schemas-parser'

const providerConfig = {
  networks: [
    { name: 'rsk:testnet', rpcUrl: 'https://did.testnet.rsk.co:4444', registry: '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b' },
    { name: 'rsk', rpcUrl: 'https://did.rsk.co:4444', registry: '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b' },
    { name: 'mainnet', rpcUrl: 'https://mainnet.infura.io/v3/8c2e55bc61b94ad781c4deae786c4f58', registry: '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b' }
  ]
}

const resolver = new Resolver(getResolver(providerConfig))

export const verifyVerifiableJwt = (jwt: string, ethSign: boolean) => {
  // @ts-expect-error: resolver is incorrect type from did-jwt
  return verifyJWT(jwt, { ethSign, resolver })
}

export const decode = (jwt: string) => {
  return decodeJWT(jwt)
}

export const parseCredential = (type: string, payload: JWTPayload) => {
  return parseVerifiableCredential(type, payload)
}
