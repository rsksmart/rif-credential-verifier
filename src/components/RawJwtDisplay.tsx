import React from 'react'

interface DecodeDisplayInterface {
  json: string
}

const DecodeDisplay: React.FC<DecodeDisplayInterface> = ({ json }) => {
  return (
    <div>
      <h3>Raw Decoded</h3>
      <pre className="textarea json">{json}</pre>
    </div>
  )
}

export default DecodeDisplay
