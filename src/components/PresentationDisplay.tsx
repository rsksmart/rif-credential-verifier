import React, { useState } from 'react'
import { JWTVerified } from 'jesse-did-jwt'
import CredentialDisplay from './CredentialDisplay'
import { FormatDates, FormatMetaData } from './MetaDataHelpers'
import ShowRawComponent from './ShowRawComponent'

interface PresentationDisplayInterface {
  jwt?: string
  presentation: JWTVerified
  verifyVerifiableJwt: (jwt: string, ethSign: boolean) => Promise<JWTVerified>
}

const PresentationDisplay: React.FC<PresentationDisplayInterface> = ({ jwt, presentation, verifyVerifiableJwt }) => {
  const [showRaw, setShowRaw] = useState<boolean>(false)

  return (
    <div className="panel presentation">
      <div className="container">
        <div className="column">
          <h3>{presentation.payload.vp.type?.join(': ')}</h3>
        </div>
        <div className="column">
          <button className="raw link" onClick={() => setShowRaw(!showRaw)}>
            {showRaw ? 'Hide' : 'Show'} Raw
          </button>
        </div>
      </div>

      {jwt && showRaw && <ShowRawComponent jwt={jwt} />}

      <FormatMetaData className="did" label="Issuer" value={presentation.issuer} />
      <FormatDates payload={presentation.payload} />

      {presentation.payload.vp.verifiableCredential.map((jwt: string) => (
        <CredentialDisplay jwt={jwt} key={jwt} verifyVerifiableJwt={verifyVerifiableJwt} />
      ))}
    </div>
  )
}

export default PresentationDisplay
