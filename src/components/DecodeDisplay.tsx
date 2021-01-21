import React from 'react'
import { appStatus } from '../state'

interface DecodeDisplayInterface {
  status: appStatus
  jwt: string
}

const DecodeDisplay: React.FC<DecodeDisplayInterface> = ({ status, jwt }) => {
  if (status !== appStatus.DECODED) {
    return <></>
  }

  return (
    <div>
      <h3>Raw Decoded</h3>
      <div className="textarea">{jwt}</div>
    </div>
  )
}

export default DecodeDisplay
