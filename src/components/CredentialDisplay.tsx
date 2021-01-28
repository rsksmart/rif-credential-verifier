import { JWTVerified } from 'jesse-did-jwt'
import React, { useState, useEffect } from 'react'
import { INVALID_SIGNATURE } from '../constants'
import ErrorComponent from './ErrorComponent'
import LoadingComponent from './LoadingComponent'
import { FormatDates, FormatMetaData } from './MetaDataHelpers'

interface CredentialDisplayInterface {
  jwt?: string
  credential?: JWTVerified
  verifyVerifiableJwt: (jwt: string, ethSign: boolean) => Promise<JWTVerified>
}

const CredentialDisplay: React.FC<CredentialDisplayInterface> = ({ jwt, credential, verifyVerifiableJwt }) => {
  interface localStateInterface {
    ethSign: boolean;
    error: null | string;
    credential?: null | JWTVerified;
  }

  const localStateInitState = {
    ethSign: false,
    error: null,
    credential: credential
  }

  const [localState, setLocalState] = useState<localStateInterface>(localStateInitState)

  const verify = async (ethSign: boolean) => {
    await setLocalState({ ...localState, error: null })
    verifyVerifiableJwt && jwt && verifyVerifiableJwt(jwt, ethSign)
      .then(async (credential: JWTVerified) => {
        await setLocalState({ ...localState, error: null, ethSign, credential })
      })
      .catch(async (err: Error) => {
        await setLocalState({ ...localState, ethSign, error: err.message })
      })
  }

  useEffect(() => {
    !credential && verify(localState.ethSign)
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

  const payload = localState.credential.payload
  const data = localState.credential.payload.vc.credentialSubject

  return (
    <div className="panel credential">
      <h3>{payload.vc.type?.join(': ')}</h3>
      <FormatMetaData className="did" label="Issuer" value={payload.iss} />
      <FormatMetaData className="did" label="Subject" value={payload.sub} />
      <FormatDates payload={payload} />
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
