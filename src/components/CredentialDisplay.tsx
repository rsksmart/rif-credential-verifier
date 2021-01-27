import { JWTDecoded } from 'jesse-did-jwt/lib/JWT'
import React, { useState, useEffect } from 'react'
import { decode } from '../operations'
import LoadingComponent from './LoadingComponent'
import { FormatDates, FormatDateTimeItem, FormatMetaData } from './MetaDataHelpers'

interface CredentialDisplayInterface {
  jwt: string
}

const CredentialDisplay: React.FC<CredentialDisplayInterface> = ({ jwt }) => {
  const [credential, setCredential] = useState<JWTDecoded | null>(null)

  useEffect(() => {
    setCredential(decode(jwt))
  }, [jwt])

  if (!credential) {
    return <LoadingComponent />
  }
  const data = credential.payload.vc.credentialSubject

  console.log(credential)
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
