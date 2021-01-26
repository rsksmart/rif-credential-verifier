import React from 'react'
import { appStatus } from '../state'

interface ErrorComponentInterface {
  status: appStatus
  message: string
}

const ErrorComponent: React.FC<ErrorComponentInterface> = ({ status, message }) => {
  if (status !== appStatus.ERROR) {
    return <></>
  }

  return (
    <div className="container">
      <div className="column">
        <p className="alert">{message}</p>
      </div>
    </div>
  )
}

export default ErrorComponent
