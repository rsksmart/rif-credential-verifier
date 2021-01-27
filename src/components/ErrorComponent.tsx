import React from 'react'

interface ErrorComponentInterface {
  message: string
}

const ErrorComponent: React.FC<ErrorComponentInterface> = ({ message }) => (
  <div className="container">
    <div className="column">
      <p className="alert">{message}</p>
    </div>
  </div>
)

export default ErrorComponent
