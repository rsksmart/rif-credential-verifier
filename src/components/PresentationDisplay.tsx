import { JWTVerified } from 'jesse-did-jwt'
import React from 'react'

interface PresentationDisplayInterface {
  presentation: JWTVerified
}

const PresentationDisplay: React.FC<PresentationDisplayInterface> = ({ presentation }) => {
  console.log('presentation', presentation)

  const FormatDateTimeItem:React.FC<{ label: string; value: number | null }> = ({ label, value }) => value ? (
    <div className="container">
      <div className="column-3 label">{label}</div>
      <div className="column-9">{new Date(value * 1000).toLocaleString()}</div>
    </div>
  ) : <></>

  return (
    <div className="panel">
      <h3>Verifiable Presentation</h3>
      <div className="container">
        <div className="column-3 label">Issuer</div>
        <div className="column-9 breakAll">{presentation.issuer}</div>
      </div>

      <FormatDateTimeItem label="Issued At" value={presentation.payload.iat} />
      <FormatDateTimeItem label="Expires" value={presentation.payload.vp.exp} />
      <FormatDateTimeItem label="Not Valid Before" value={presentation.payload.vp.nbf} />
    </div>
  )
}

export default PresentationDisplay
