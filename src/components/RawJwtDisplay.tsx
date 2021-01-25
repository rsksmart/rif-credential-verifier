import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

interface DecodeDisplayInterface {
  jwt?: string
}

const DecodeDisplay: React.FC<DecodeDisplayInterface> = ({ jwt }) => {
  if (!jwt) {
    return <></>
  }

  const [json, setJson] = useState<string | null>(null)

  useEffect(() => {
    const decoded = jwtDecode(jwt)
    setJson(JSON.stringify(decoded, null, 2))
  }, [jwt])

  return (
    <div>
      <h3>Raw Decoded</h3>
      <pre className="textarea json">{json}</pre>
    </div>
  )
}

export default DecodeDisplay
