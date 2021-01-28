import { JWTVerified } from 'jesse-did-jwt'
import React from 'react'
import CredentialDisplay from './CredentialDisplay'
import { FormatDates, FormatMetaData } from './MetaDataHelpers'

interface PresentationDisplayInterface {
  presentation: JWTVerified
  verifyVerifiableJwt: (jwt: string, ethSign: boolean) => Promise<JWTVerified>
}

const PresentationDisplay: React.FC<PresentationDisplayInterface> = ({ presentation, verifyVerifiableJwt }) => (
  <div className="panel presentation">
    <h3>{presentation.payload.vp.type?.join(': ')}</h3>

    <FormatMetaData className="did" label="Issuer" value={presentation.issuer} />
    <FormatDates payload={presentation.payload} />

    {presentation.payload.vp.verifiableCredential.map((jwt: string) => (
      <CredentialDisplay jwt={jwt} key={jwt} verifyVerifiableJwt={verifyVerifiableJwt} />
    ))}
  </div>
)

export default PresentationDisplay
