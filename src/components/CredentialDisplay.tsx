import { JWTVerified } from 'jesse-did-jwt'
import React, { useState, useEffect } from 'react'
import { INVALID_SIGNATURE } from '../constants'
import { verifyVerifiableJwt } from '../operations'
import ErrorComponent from './ErrorComponent'
import LoadingComponent from './LoadingComponent'
import { FormatDates, FormatMetaData } from './MetaDataHelpers'

interface CredentialDisplayInterface {
  jwt: string
}

const CredentialDisplay: React.FC<CredentialDisplayInterface> = ({ jwt }) => {
  interface localStateInterface {
    ethSign: boolean;
    error: null | string;
    credential: null | JWTVerified;
  }

  const localStateInitState = {
    ethSign: false,
    error: null,
    credential: null
  }
  
  const [localState, setLocalState] = useState<localStateInterface>(localStateInitState)

  const verify = async (ethSign: boolean) => {
    await setLocalState({ ...localState, error: null })
    verifyVerifiableJwt(jwt, ethSign)
      .then(async (credential: JWTVerified) => {
        await setLocalState({ ...localState, error: null, ethSign, credential })
      })
      .catch(async (err: Error) => {
        await setLocalState({ ...localState, ethSign, error: err.message })
      })
  }

  useEffect(() => {
    verify(localState.ethSign)
  }, [jwt])

  if (localState.error) {
    return (
      <div className="panel credential">
        <h3>VerifiableCredential</h3>
        <ErrorComponent message={localState.error} />
        {(localState.error === INVALID_SIGNATURE) && (
          <button onClick={() => { console.log('click again'); verify(!localState.ethSign) }}>
            Try again <strong>{localState.ethSign ? 'without' : 'with'}</strong> eth sign.
          </button>
        )}
      </div>
    )
  }

  if (!localState.credential) {
    return <LoadingComponent />
  }

  const credential = localState.credential
  const data = localState.credential.payload.vc.credentialSubject

  return (
    <div className="panel credential">
      <h3>{credential.payload.vc.type?.join(': ')}</h3>
      <FormatMetaData className="did" label="Issuer" value={credential.payload.iss} />
      <FormatMetaData className="did" label="Subject" value={credential.payload.sub} />
      <FormatDates payload={credential.payload} />
      <h4>CredentialSubject</h4>
      {data && (
        Object.keys(data).map((key: string) => (
          <FormatMetaData value={data[key]} label={key} key={key} />
        ))
      )}
    </div>
  )
}

export default CredentialDisplay
