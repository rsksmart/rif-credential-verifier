import React from 'react'
import { decode } from '../operations'

interface ShowRawComponentInterface {
  jwt: string
}

const ShowRawComponent: React.FC<ShowRawComponentInterface> = ({ jwt }) => {
  try {
    const decoded = decode(jwt)
    return (
      <pre className="raw">
        {JSON.stringify(decoded, null, 2)}
      </pre>
    )
  } catch (err: any) {
    return <div className="alert">{err.message}</div>
  }
}

export default ShowRawComponent
