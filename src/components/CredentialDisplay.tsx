import { JWTVerified } from 'jesse-did-jwt'
import React, { useState, useEffect } from 'react'
import { INVALID_SIGNATURE } from '../constants'
import ErrorComponent from './ErrorComponent'
import LoadingComponent from './LoadingComponent'
import { FormatDates, FormatMetaData } from './MetaDataHelpers'
import ShowRawComponent from './ShowRawComponent'

interface CredentialDisplayInterface {
  jwt?: string
  credential?: JWTVerified
  verifyVerifiableJwt: (jwt: string, ethSign: boolean) => any
}

const CredentialDisplay: React.FC<CredentialDisplayInterface> = ({ jwt, credential, verifyVerifiableJwt }) => {
  const [ethSign, setEthSign] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [decodedCredential, setDecodedCredential] = useState<JWTVerified | null>(null)
  const [showRaw, setShowRaw] = useState<boolean>(false)

  const verify = (useEthSign: boolean) => {
    setError(null)
    setEthSign(useEthSign)
    verifyVerifiableJwt && jwt && verifyVerifiableJwt(jwt, useEthSign)
      .then((response: JWTVerified) => setDecodedCredential(response))
      .catch((err: Error) => setError(err.message))
  }

  useEffect(() => {
    !credential ? verify(ethSign) : setDecodedCredential(credential)
  }, [jwt])

  if (error) {
    return (
      <div className="panel error">
        <h3>VerifiableCredential</h3>
        <ErrorComponent message={error} />
        {(error === INVALID_SIGNATURE) && (
          <button onClick={() => { verify(!ethSign) }}>
            Try again <strong>{ethSign ? 'without' : 'with'}</strong> eth sign.
          </button>
        )}
      </div>
    )
  }

  if (!decodedCredential) {
    return <LoadingComponent />
  }

  const payload = decodedCredential.payload
  const data = decodedCredential.payload.vc.credentialSubject

  return (
    <div className="panel credential">
      <div className="container">
        <div className="column">
          <h3>{payload.vc.type?.join(': ')}</h3>
        </div>
        <div className="column">
          <button className="raw link" onClick={() => setShowRaw(!showRaw)}>
            {showRaw ? 'Hide' : 'Show'} Raw
          </button>
        </div>
      </div>
      {showRaw && jwt && <ShowRawComponent jwt={jwt} />}
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
