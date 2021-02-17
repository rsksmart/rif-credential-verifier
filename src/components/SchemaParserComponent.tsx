import { JWTPayload } from 'jesse-did-jwt'
import React, { useEffect, useState } from 'react'
import { parseCredential } from '../operations'
import { FormatMetaData } from './MetaDataHelpers'

interface SchemaParserComponentInterface {
  payload: JWTPayload
}

const SchemaParserComponent: React.FC<SchemaParserComponentInterface> = ({ payload }) => {
  const [error, setError] = useState<string | null>(null)
  const [parsed, setParsed] = useState<any | null>(null)
  const type = payload.vc.type[1]

  useEffect(() => {
    try {
      const result = parseCredential(type, payload.vc)
      setParsed(result)
    } catch (err: any) {
      setError(err.message)
    }
  }, [payload])

  return (
    <div>
      <h4>Contents</h4>
      {error && (
        <div className="invalid">
          <p className="alert"><strong>{error}</strong></p>
          {Object.keys(payload.vc.credentialSubject).map((key: string) => (
            <FormatMetaData value={payload.vc.credentialSubject[key]} label={key} key={key} />
          ))}
        </div>
      )}

      {parsed && <FormatMetaData value={parsed[type].text} label={parsed[type].prefix.en} />}
    </div>
  )
}

export default SchemaParserComponent
