import React from 'react'

interface ErrorComponentInterface {
  message: string
}

const ErrorComponent: React.FC<ErrorComponentInterface> = ({ message }) => (
  <p className="alert">{message}</p>
)

export default ErrorComponent
