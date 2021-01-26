import { Resolver } from 'did-resolver'
import { getResolver } from 'ethr-did-resolver'
import { verifyPresentation, verifyCredential } from 'did-jwt-vc'
// import { verifyJWT } from 'jesse-did-jwt'

const providerConfig = {
  networks: [
    { name: 'rsk:testnet', rpcUrl: 'https://did.testnet.rsk.co:4444', registry: '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b' },
    { name: 'rsk', rpcUrl: 'https://did.rsk.co:4444', registry: '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b' },
    { name: 'mainnet', rpcUrl: 'https://mainnet.infura.io/v3/8c2e55bc61b94ad781c4deae786c4f58', registry: '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b' }
  ]
}
const resolver = new Resolver(getResolver(providerConfig))

export const handleVerifiablePresentation = (jwt: string) => {
  console.log('presentation check...')
  return verifyPresentation(jwt, resolver)
}

export const handleVerifiableCredential = (jwt: string) => {
  console.log('credential check...')
  console.log(resolver)
  return verifyCredential(jwt, resolver)
}

/*
export const handleVerifiableJwt = (jwt: string) => {
  // return Promise.resolve('hello')
  console.log('trying...', jwt)
  // const localResolver = new Resolver()
  // localResolver.resolve('https://did.testnet.rsk.co:4444')
  return verifyJWT(jwt, { ethSign: true, resolver: resolver })
    .then((verifiedResponse: any) => console.log('success!', verifiedResponse))
    .catch((error: Error) => console.log('Error', error.message))
}
*/
